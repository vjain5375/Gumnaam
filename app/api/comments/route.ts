import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const personId = searchParams.get('personId');

  try {
    let query = supabase.from('comments').select('*').order('createdAt', { ascending: true });
    
    if (personId) {
      query = query.eq('personId', personId);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to read comments' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { personId, text } = await request.json();
    
    if (!personId || !text) {
      return NextResponse.json({ error: 'personId and text are required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('comments')
      .insert({ personId, text })
      .select()
      .single();
      
    if (error) throw error;
    
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to post comment' }, { status: 500 });
  }
}
