import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Flame, Star, Send } from "lucide-react";

const posts = [
  {
    id: 1,
    author: "AquaMarineMonkey",
    avatar: "https://picsum.photos/seed/avatar1/100",
    content: "Just hit a 7-day streak! Feeling more in control than ever. The breathing exercises are a game-changer.",
    streak: 7,
    timestamp: "2h ago",
  },
  {
    id: 2,
    author: "CrimsonFox",
    avatar: "https://picsum.photos/seed/avatar2/100",
    content: "Finished the Stoicism module. Really puts things into perspective. Today was tough, but I managed to stay on track. Small wins!",
    streak: 23,
    timestamp: "8h ago",
  },
   {
    id: 3,
    author: "GoldenEagle",
    avatar: "https://picsum.photos/seed/avatar3/100",
    content: "Matched with an accountability buddy! It's great to have someone to check in with. We're both aiming for 30 days.",
    streak: 2,
    timestamp: "1d ago",
  },
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="p-4 sm:p-6 border-b">
        <h1 className="text-2xl font-bold font-headline">Community</h1>
        <p className="text-muted-foreground">Share wins, find support, and grow together.</p>
      </header>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        <Card>
            <CardContent className="pt-6">
                <div className="flex gap-4">
                    <Avatar>
                        <AvatarImage src="https://picsum.photos/seed/myavatar/100" data-ai-hint="abstract geometric" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                        <Textarea placeholder="Share a win, a reflection, or a word of encouragement..." />
                        <Button size="sm">
                            <Send className="h-4 w-4 mr-2" /> Share
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.author} data-ai-hint="abstract nature" />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                  </div>
                  <p className="text-muted-foreground mt-1">{post.content}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 text-accent font-medium">
                        <Flame className="h-4 w-4" /> {post.streak} Day Streak
                    </div>
                     <Button variant="ghost" size="sm" className="flex items-center gap-1 -ml-2">
                        <Star className="h-4 w-4" /> Support
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
