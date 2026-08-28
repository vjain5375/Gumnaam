import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const personId = searchParams.get('personId');

  try {
    if (personId) {
      const { data, error } = await supabase
        .from('claps')
        .select('count')
        .eq('personId', personId)
        .single();
      
      if (error && error.code !== 'PGRST116') {
        throw error;
      }
      return NextResponse.json({ count: data?.count || 0 });
    }
    
    const { data, error } = await supabase.from('claps').select('*');
    if (error) throw error;
    
    const formatted = data.reduce((acc: any, curr: any) => {
      acc[curr.personId] = curr.count;
      return acc;
    }, {});
    
    return NextResponse.json(formatted);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to read claps' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { personId } = await request.json();
    if (!personId) {
      return NextResponse.json({ error: 'personId is required' }, { status: 400 });
    }

    const { data: existing, error: fetchError } = await supabase
      .from('claps')
      .select('count')
      .eq('personId', personId)
      .single();

    const currentCount = existing?.count || 0;
    const newCount = currentCount + 1;

    if (currentCount === 0 && fetchError?.code === 'PGRST116') {
      const { error } = await supabase.from('claps').insert({ personId, count: newCount });
      if (error) throw error;
    } else {
      const { error } = await supabase.from('claps').update({ count: newCount }).eq('personId', personId);
      if (error) throw error;
    }
    
    return NextResponse.json({ count: newCount }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to add clap' }, { status: 500 });
  }
}
