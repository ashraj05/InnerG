import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Star, ShoppingBag, BarChart2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold font-headline">Dashboard</h1>
        <p className="text-muted-foreground">Your progress and analytics at a glance.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline">Streaks & Badges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Flame className="text-accent" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12 Days</p>
              <p className="text-sm text-muted-foreground">Longest: 28 Days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Star className="text-yellow-400" />
                Badges Earned
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">30-Day Club</Badge>
              <Badge variant="secondary">Mindful Master</Badge>
              <Badge variant="secondary">Community Pillar</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline">Completion Analytics</h2>
         <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart2 className="text-primary" />
                  Activity Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Talk</span>
                  <span className="text-sm text-muted-foreground">8h 32m</span>
                </div>
                <Progress value={70} />
              </div>
               <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Do</span>
                  <span className="text-sm text-muted-foreground">42 sessions</span>
                </div>
                <Progress value={55} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Learn</span>
                  <span className="text-sm text-muted-foreground">18 modules</span>
                </div>
                <Progress value={85} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Test</span>
                  <span className="text-sm text-muted-foreground">5 assessments</span>
                </div>
                <Progress value={40} />
              </div>
            </CardContent>
         </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline">Purchased Items</h2>
        <Card>
           <CardHeader>
             <CardTitle className="flex items-center gap-2 text-lg">
                <ShoppingBag className="text-green-500" />
                From Store
             </CardTitle>
           </CardHeader>
           <CardContent>
            <p className="text-muted-foreground">No items purchased yet.</p>
           </CardContent>
        </Card>
      </section>
    </div>
  );
}
