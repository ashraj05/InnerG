import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Video, MessageSquare } from "lucide-react";
import AiSosChat from "@/components/ai-sos-chat";

const motivators = [
  { name: "Alex Ray", specialty: "Mindfulness Coach", avatar: "https://picsum.photos/id/1005/100/100", status: "Online" },
  { name: "Jordan Lee", specialty: "Life Strategist", avatar: "https://picsum.photos/id/1012/100/100", status: "Online" },
  { name: "Casey Williams", specialty: "Performance Expert", avatar: "https://picsum.photos/id/1027/100/100", status: "Busy" },
  { name: "Morgan Quinn", specialty: "Habit Formation", avatar: "https://picsum.photos/id/64/100/100", status: "Offline" },
];

export default function TalkPage() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold font-headline">Talk</h1>
        <p className="text-muted-foreground">Connect with someone who can help, right when you need it.</p>
      </header>
      
      <AiSosChat />

      <div className="space-y-4">
        <h2 className="text-lg font-semibold font-headline">Available Motivators</h2>
        <div className="grid grid-cols-1 gap-4">
          {motivators.map((motivator) => (
            <Card key={motivator.name} className="flex flex-col sm:flex-row items-center p-4 gap-4">
              <div className="flex items-center gap-4 flex-1">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={motivator.avatar} alt={motivator.name} data-ai-hint="person portrait" />
                  <AvatarFallback>{motivator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{motivator.name}</p>
                  <p className="text-sm text-muted-foreground">{motivator.specialty}</p>
                   <div className="flex items-center gap-2 mt-1">
                      <div className={`h-2 w-2 rounded-full ${motivator.status === "Online" ? 'bg-green-500' : motivator.status === 'Busy' ? 'bg-yellow-500' : 'bg-gray-400'}`}></div>
                      <p className="text-xs text-muted-foreground">{motivator.status}</p>
                   </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" disabled={motivator.status !== 'Online'}>
                  <MessageSquare className="h-5 w-5" />
                  <span className="sr-only">Chat</span>
                </Button>
                <Button variant="outline" size="icon" disabled={motivator.status !== 'Online'}>
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Call</span>
                </Button>
                <Button variant="outline" size="icon" disabled={motivator.status !== 'Online'}>
                  <Video className="h-5 w-5" />
                  <span className="sr-only">Video Call</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
