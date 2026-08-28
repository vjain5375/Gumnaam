'use client';

import { useState, useRef, useEffect } from 'react';
import Button from "@/components/shared/Button";

export default function InteractiveProfile({ person, nextPersonId }: { person: any, nextPersonId: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [claps, setClaps] = useState(0);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch initial claps & comments
  useEffect(() => {
    fetch(`/api/claps?personId=${person.id}`)
      .then(res => res.json())
      .then(data => setClaps(data.count || 0));

    fetch(`/api/comments?personId=${person.id}`)
      .then(res => res.json())
      .then(data => setComments(data || []));
  }, [person.id]);

  const jumpToQuote = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5; // jump to 5 seconds for prototype
      videoRef.current.play();
    }
  };

  const handleClap = async () => {
    setClaps(prev => prev + 1); // optimistic update
    await fetch('/api/claps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ personId: person.id })
    });
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setIsSubmitting(true);
    
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ personId: person.id, text: newComment })
    });
    const savedComment = await res.json();
    setComments([...comments, savedComment]);
    setNewComment("");
    setIsSubmitting(false);
  };

  return (
    <div className="mt-12 space-y-16">
      
      {/* Video Section */}
      <section>
        <div className="relative rounded-2xl overflow-hidden bg-black/5 border border-border aspect-video flex items-center justify-center group">
          <video 
            ref={videoRef}
            src={person.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"} 
            controls 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-muted">Documentary excerpt (Sample)</p>
          <Button href={`/people/${nextPersonId}`} variant="text">
            Skip to next worker &rarr;
          </Button>
        </div>
      </section>

      {/* Interactive Quote */}
      {person.quote && (
        <section className="bg-background-alt p-8 rounded-2xl border border-border relative overflow-hidden group transition-colors hover:border-accent/50 cursor-pointer" onClick={jumpToQuote}>
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">Click to jump to this moment in video</p>
          <p className="font-serif text-2xl leading-snug text-foreground italic md:text-3xl relative z-10">
            &ldquo;{person.quote}&rdquo;
          </p>
        </section>
      )}

      {/* Bio */}
      <section>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {person.shortBio}
        </p>
      </section>

      {/* Interactivity: Claps & Comments */}
      <section className="border-t border-border pt-12">
        <div className="flex items-center gap-6 mb-12">
          <button 
            onClick={handleClap}
            className="flex items-center gap-3 bg-accent/10 hover:bg-accent/20 text-accent px-6 py-3 rounded-full font-medium transition-transform active:scale-95"
          >
            <span>👏</span>
            <span>Applaud Story</span>
          </button>
          <span className="text-muted text-lg">{claps} {claps === 1 ? 'Clap' : 'Claps'}</span>
        </div>

        <div className="space-y-8">
          <h3 className="font-serif text-2xl text-foreground">Appreciation Board</h3>
          
          <form onSubmit={handleCommentSubmit} className="flex flex-col gap-4 max-w-xl">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={`Leave a message for ${person.name.split(' ')[0]}...`}
              className="w-full bg-background border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none min-h-[100px]"
              required
            />
            <div className="self-end">
              {/* Note: In a real project we'd use a real Button component if it supports onClick, but standard HTML button works for form submission */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-foreground text-background px-6 py-2 rounded-full font-medium hover:bg-foreground/90 disabled:opacity-50"
              >
                {isSubmitting ? 'Posting...' : 'Post Message'}
              </button>
            </div>
          </form>

          <div className="space-y-4 max-w-xl mt-8">
            {comments.length === 0 ? (
              <p className="text-muted italic">No messages yet. Be the first to show your appreciation!</p>
            ) : (
              comments.map((c: any) => (
                <div key={c.id} className="bg-background-alt p-5 rounded-xl border border-border">
                  <p className="text-foreground">{c.text}</p>
                  <p className="text-xs text-muted mt-2">{new Date(c.createdAt).toLocaleDateString()}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
