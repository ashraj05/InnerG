import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Brain, Smile, Gauge } from "lucide-react";
import Image from "next/image";

const tests = [
  { 
    title: "ADHD Screening", 
    description: "Assess symptoms related to attention-deficit/hyperactivity disorder.", 
    icon: <Brain className="h-8 w-8 text-primary" />,
    image: "https://picsum.photos/seed/adhd/400/200",
    hint: "abstract focus"
  },
  { 
    title: "Procrastination Test", 
    description: "Understand your patterns of delay and how to overcome them.", 
    icon: <Gauge className="h-8 w-8 text-primary" />,
    image: "https://picsum.photos/seed/procrastination/400/200",
    hint: "clock time"
  },
  { 
    title: "Personality Test", 
    description: "Discover your unique personality traits and strengths (based on Big Five).", 
    icon: <Smile className="h-8 w-8 text-primary" />,
    image: "https://picsum.photos/seed/personality/400/200",
    hint: "colorful personality"
  },
];

export default function TestPage() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold font-headline">Self-Assessments</h1>
        <p className="text-muted-foreground">Gain valuable insights into your mind and habits.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {tests.map((test) => (
          <Card key={test.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative h-32 w-full">
                <Image 
                    src={test.image} 
                    alt={test.title}
                    fill
                    className="object-cover"
                    data-ai-hint={test.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <CardHeader className="absolute bottom-0 text-white">
                    <div className="flex items-center gap-3">
                        {test.icon}
                        <CardTitle className="text-xl">{test.title}</CardTitle>
                    </div>
                </CardHeader>
            </div>
            <CardContent className="p-4">
              <CardDescription className="mb-4">{test.description}</CardDescription>
              <Button className="w-full" variant="secondary">
                <FileText className="mr-2 h-4 w-4" />
                Start Test
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

       <Card className="text-center bg-muted/50 border-dashed">
            <CardHeader>
                <CardTitle className="text-lg">Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    These tests are for informational purposes only and are not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
            </CardContent>
        </Card>
    </div>
  );
}
