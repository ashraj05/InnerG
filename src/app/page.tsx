"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Flower2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const totalSteps = 6;

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const nextStep = () => setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  const finishOnboarding = () => router.push("/talk");

  const progress = (step / totalSteps) * 100;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader>
          <Progress value={progress} className="mb-4 h-2" />
          <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-2xl">
              {step < totalSteps ? `Setup Your Profile` : `You're All Set!`}
            </CardTitle>
            <span className="text-sm text-muted-foreground">
              {step}/{totalSteps}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          {step === 1 && <Step1 nextStep={nextStep} />}
          {step === 2 && <Step2 nextStep={nextStep} />}
          {step === 3 && <Step3 nextStep={nextStep} />}
          {step === 4 && <Step4 nextStep={nextStep} />}
          {step === 5 && <Step5 nextStep={nextStep} />}
          {step === 6 && <Step6 finishOnboarding={finishOnboarding} />}
        </CardContent>
      </Card>
    </div>
  );
}

const Step1 = ({ nextStep }: { nextStep: () => void }) => (
  <div className="flex flex-col items-center text-center space-y-6">
    <Flower2 className="h-16 w-16 text-primary" />
    <div className="space-y-2">
        <h2 className="text-xl font-semibold font-headline">Welcome to InnerG</h2>
        <p className="text-muted-foreground">
        Let's get to know you a bit. This will help us personalize your journey to better focus and well-being.
        </p>
    </div>
    <Button onClick={nextStep} className="w-full" size="lg">
      Let's Begin <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </div>
);

const Step2 = ({ nextStep }: { nextStep: () => void }) => (
    <div className="space-y-6">
        <CardDescription>First, tell us some basics about yourself.</CardDescription>
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="e.g., 28" />
            </div>
            <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup defaultValue="prefer-not-to-say" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
        <Button onClick={nextStep} className="w-full">
            Next
        </Button>
    </div>
);


const Step3 = ({ nextStep }: { nextStep: () => void }) => (
    <div className="space-y-6">
        <CardDescription>A little about your daily life.</CardDescription>
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Input id="occupation" placeholder="e.g., Software Engineer, Student" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="relationship-status">Relationship Status</Label>
                <Select>
                    <SelectTrigger id="relationship-status">
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="in-a-relationship">In a relationship</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <Button onClick={nextStep} className="w-full">
            Next
        </Button>
    </div>
);

const Step4 = ({ nextStep }: { nextStep: () => void }) => (
    <div className="space-y-6">
        <CardDescription>When do you feel the strongest need for a distraction? We call these 'Urge Windows'.</CardDescription>
        <div className="space-y-4">
            <div className="space-y-2">
                <Label>Typical Urge Windows</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a time of day" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="morning">Morning (6am - 12pm)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                        <SelectItem value="evening">Evening (5pm - 10pm)</SelectItem>
                        <SelectItem value="late-night">Late Night (10pm - 6am)</SelectItem>
                        <SelectItem value="all-day">It varies / All day</SelectItem>
                    </SelectContent>
                </Select>
                 <p className="text-xs text-muted-foreground pt-1">This helps us send you timely motivational prompts.</p>
            </div>
        </div>
        <Button onClick={nextStep} className="w-full">
            Next
        </Button>
    </div>
);

const Step5 = ({ nextStep }: { nextStep: () => void }) => (
    <div className="space-y-6">
        <CardDescription>Your privacy is paramount. Choose how you'd like to appear in the community.</CardDescription>
        <div className="space-y-4">
             <RadioGroup defaultValue="anonymous" className="space-y-2">
                <Label className="flex items-center space-x-3 p-4 border rounded-md cursor-pointer hover:bg-muted/50 has-[:checked]:bg-accent has-[:checked]:text-accent-foreground has-[:checked]:border-accent">
                    <RadioGroupItem value="anonymous" id="anonymous" />
                    <div className="flex-1">
                        <p className="font-medium">Go Anonymous</p>
                        <p className="text-sm text-muted-foreground has-[:checked]:text-accent-foreground/80">
                            You'll be assigned a random cool alias and avatar.
                        </p>
                    </div>
                </Label>
                <Label className="flex items-center space-x-3 p-4 border rounded-md cursor-pointer hover:bg-muted/50 has-[:checked]:bg-accent has-[:checked]:text-accent-foreground has-[:checked]:border-accent">
                     <RadioGroupItem value="public" id="public" />
                     <div className="flex-1">
                        <p className="font-medium">Use My Profile</p>
                         <p className="text-sm text-muted-foreground has-[:checked]:text-accent-foreground/80">
                            Your name and profile picture will be visible.
                        </p>
                    </div>
                </Label>
            </RadioGroup>
        </div>
        <Button onClick={nextStep} className="w-full">
            Next
        </Button>
    </div>
);

const Step6 = ({ finishOnboarding }: { finishOnboarding: () => void }) => (
    <div className="flex flex-col items-center text-center space-y-6">
        <div className="p-4 bg-primary/20 rounded-full">
            <Flower2 className="h-16 w-16 text-primary" />
        </div>
        <div className="space-y-2">
            <h2 className="text-xl font-semibold font-headline">Setup Complete!</h2>
            <p className="text-muted-foreground">
                Your FocusFlow experience is now tailored to you. You're ready to start your journey towards a more focused and fulfilling life.
            </p>
        </div>
        <Button onClick={finishOnboarding} className="w-full" size="lg">
            Start My Journey
        </Button>
    </div>
);
