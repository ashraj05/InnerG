import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Wind, BrainCircuit, Target, Star, Zap, Sparkles } from "lucide-react";
import Image from "next/image";

function ExerciseBallIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 2.06 1.04 4.34 3.02 6.5" />
      <path d="M17.48 19.5A7.5 7.5 0 0 0 12 21.5a7.49 7.49 0 0 0-1-3" />
    </svg>
  )
}


export default function DoPage() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold font-headline">Do</h1>
        <p className="text-muted-foreground">Take a moment for yourself. Refocus, recenter, and relax.</p>
      </header>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold font-headline">Guided Practices</h2>
        <p className="text-sm text-muted-foreground">Calm your mind and strengthen your body.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <ExerciseBallIcon className="h-8 w-8 text-accent mb-2" />
            <CardTitle className="text-lg">Kegel Exercises</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Strengthen your pelvic floor muscles.</p>
            <Button variant="outline" className="w-full">Start Practice</Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <Sparkles className="h-8 w-8 text-accent mb-2" />
            <CardTitle className="text-lg">Affirmations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Reinforce positive beliefs about yourself.</p>
            <Button variant="outline" className="w-full">Practice Affirmations</Button>
          </CardContent>
        </Card>
      </div>
      
       <div className="space-y-2 pt-4">
        <h2 className="text-lg font-semibold font-headline">Daily Challenges</h2>
        <p className="text-sm text-muted-foreground">Small steps, big results. Build positive habits.</p>
      </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="overflow-hidden group">
            <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                    <p className="font-semibold">Cold Shower</p>
                    <p className="text-sm text-muted-foreground">Boost energy and discipline.</p>
                </div>
                <Button size="sm" variant="outline">Done</Button>
            </CardContent>
          </Card>
           <Card className="overflow-hidden group">
            <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                    <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                    <p className="font-semibold">Sunlight</p>
                    <p className="text-sm text-muted-foreground">Get 10 mins of morning sun.</p>
                </div>
                <Button size="sm" variant="outline">Done</Button>
            </CardContent>
          </Card>
           <Card className="overflow-hidden group">
            <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                    <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                    <p className="font-semibold">Grounding</p>
                    <p className="text-sm text-muted-foreground">Connect with the earth.</p>
                </div>
                <Button size="sm" variant="outline">Done</Button>
            </CardContent>
          </Card>
            <Card className="overflow-hidden group">
            <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                    <Zap className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                    <p className="font-semibold">Journaling</p>
                    <p className="text-sm text-muted-foreground">Reflect on your day.</p>
                </div>
                <Button size="sm" variant="outline">Done</Button>
            </CardContent>
          </Card>
       </div>


    </div>
  );
}
