import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Wind, BrainCircuit, Target, Star } from "lucide-react";
import Image from "next/image";

export default function DoPage() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold font-headline">Good Morning!</h1>
        <p className="text-muted-foreground">Ready to own the day? Let's get started.</p>
      </header>

      <Card className="bg-gradient-to-br from-primary/80 to-accent/60 text-primary-foreground border-none shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle>Your Streak</CardTitle>
            <CardDescription className="text-primary-foreground/80">Keep the fire going!</CardDescription>
          </div>
          <Flame className="h-8 w-8 text-white drop-shadow-md" />
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <div className="text-6xl font-bold">12</div>
          <div className="text-lg">Days</div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold font-headline">Do</h2>
        <p className="text-sm text-muted-foreground">Take a moment for yourself. Refocus, recenter, and relax.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <Wind className="h-8 w-8 text-accent mb-2" />
            <CardTitle className="text-lg">Breathing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Guided exercises to calm your mind.</p>
            <Button variant="outline" className="w-full">Start Session</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <BrainCircuit className="h-8 w-8 text-accent mb-2" />
            <CardTitle className="text-lg">Meditation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Find your inner peace and clarity.</p>
            <Button variant="outline" className="w-full">Begin Meditation</Button>
          </CardContent>
        </Card>
      </div>
      
      <Card className="overflow-hidden group">
        <div className="relative h-40 w-full">
            <Image 
                src="https://picsum.photos/600/400" 
                alt="Daily Challenge" 
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                data-ai-hint="mountain path"
            />
            <div className="absolute inset-0 bg-black/40" />
            <CardHeader className="relative text-white">
                <Target className="h-8 w-8 mb-2" />
                <CardTitle>Daily Habit Challenge</CardTitle>
                <CardDescription className="text-white/80">Read one chapter of a book.</CardDescription>
            </CardHeader>
        </div>
        <CardContent className="pt-4">
             <p className="text-sm text-muted-foreground mb-4">Small steps, big results. Complete today's challenge to build a positive habit.</p>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Star className="mr-2 h-4 w-4" /> I Did It!
            </Button>
        </CardContent>
      </Card>

    </div>
  );
}
