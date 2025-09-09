import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Zap, Puzzle } from "lucide-react";
import Image from "next/image";

const modules = [
  { title: "The Science of Habit", category: "Neuroscience", image: "https://picsum.photos/seed/neuro/300/200", hint: "brain synapse" },
  { title: "Stoicism for Modern Life", category: "Philosophy", image: "https://picsum.photos/seed/philo/300/200", hint: "ancient statue" },
  { title: "Understanding Dopamine", category: "Psychology", image: "https://picsum.photos/seed/psych/300/200", hint: "abstract mind" },
];

export default function LearnPage() {
  return (
    <div className="p-4 sm:p-6 space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold font-headline">Learn</h1>
        <p className="text-muted-foreground">Expand your mind with bite-sized lessons and stories.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Microlearning Modules
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {modules.map((module) => (
            <Card key={module.title} className="overflow-hidden group flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/3 h-32 sm:h-full relative">
                <Image
                  src={module.image}
                  alt={module.title}
                  fill
                  className="object-cover"
                  data-ai-hint={module.hint}
                />
              </div>
              <div className="flex-1 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{module.category}</p>
                <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                <Button variant="secondary" size="sm">Start Learning</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Daily Inspiration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-md">Daily Fact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">The human brain has about 86 billion neurons, each connecting to thousands of others.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-md">Motivational Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Discover how J.K. Rowling faced 12 rejections before Harry Potter was published.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline flex items-center gap-2">
          <Puzzle className="h-5 w-5 text-primary" />
          Brain Teaser
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?</p>
            <Button variant="outline">Reveal Answer</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
