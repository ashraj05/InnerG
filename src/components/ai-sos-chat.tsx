"use client";

import { useState, useRef, useEffect } from "react";
import { getMotivationalMessage } from "@/ai/flows/ai-sos-fallback.ts";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Siren, Bot, User, CornerDownLeft, Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function AiSosChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await getMotivationalMessage({ userInput: input });
      const aiMessage: Message = { sender: "ai", text: result.message };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching motivational message:", error);
      const errorMessage: Message = { sender: "ai", text: "I'm having a little trouble connecting right now. Please try again in a moment." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        // A bit of a hack to scroll to bottom. The radix scroll area viewport is not the ref itself.
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
             viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg" size="lg">
          <Siren className="mr-2 h-6 w-6" />
          AI SOS Fallback
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[85vh] flex flex-col p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>AI Motivator</SheetTitle>
          <SheetDescription>
            When you need a quick boost, I'm here to help. What's on your mind?
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-3 ${message.sender === "user" ? "justify-end" : ""}`}>
                {message.sender === "ai" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-5 w-5"/></AvatarFallback>
                  </Avatar>
                )}
                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  <p className="text-sm">{message.text}</p>
                </div>
                 {message.sender === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
             {isLoading && (
                 <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-5 w-5"/></AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-2 bg-muted flex items-center">
                        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                    </div>
                </div>
            )}
          </div>
        </ScrollArea>
        <div className="p-4 border-t bg-background">
          <div className="relative">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell me what's happening..."
              className="pr-20 min-h-[60px]"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
            >
              <CornerDownLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
