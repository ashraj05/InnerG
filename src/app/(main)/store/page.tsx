import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileImage, Shirt, ShoppingCart } from "lucide-react";
import Image from "next/image";

const books = [
  {
    title: "The Power of Habit",
    description: "Why we do what we do in life and business.",
    image: "https://picsum.photos/seed/book1/300/400",
    hint: "book cover",
    price: "$18",
  },
  {
    title: "Atomic Habits",
    description: "Tiny changes, remarkable results.",
    image: "https://picsum.photos/seed/book2/300/400",
    hint: "book cover abstract",
    price: "$22",
  },
];

const posters = [
  {
    title: "FocusFlow Poster",
    description: "A daily reminder to stay on track.",
    image: "https://picsum.photos/seed/poster/300/300",
    hint: "motivational poster",
    price: "$15",
  },
  {
    title: "Stoic Wisdom",
    description: "Control what you can, accept what you can't.",
    image: "https://picsum.photos/seed/poster2/300/300",
    hint: "philosophy poster",
    price: "$15",
  },
];

const merch = [
   {
    title: "Mindful Moment Bracelet",
    description: "A subtle, stylish cue to be present.",
    image: "https://picsum.photos/seed/bracelet/300/300",
    hint: "inspirational bracelet",
    price: "$25",
  },
  {
    title: "InnerG Branded T-Shirt",
    description: "Wear your journey with pride.",
    image: "https://picsum.photos/seed/tshirt/300/300",
    hint: "branded t-shirt",
    price: "$30",
  },
];


export default function StorePage() {
  return (
    <div className="p-4 sm:p-6 space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold font-headline">Store</h1>
        <p className="text-muted-foreground">Motivational items to support your journey.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Books
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {books.map((item) => (
            <Card key={item.title} className="overflow-hidden group">
                 <div className="relative h-48 w-full">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        data-ai-hint={item.hint}
                    />
                 </div>
                 <CardContent className="p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground h-10 truncate">{item.description}</p>
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-bold">{item.price}</p>
                        <Button variant="outline" size="sm">Add to Cart</Button>
                    </div>
                 </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline flex items-center gap-2">
            <FileImage className="h-5 w-5 text-primary" />
            Posters
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {posters.map((item) => (
            <Card key={item.title} className="overflow-hidden group">
                 <div className="relative h-48 w-full">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        data-ai-hint={item.hint}
                    />
                 </div>
                 <CardContent className="p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground h-10 truncate">{item.description}</p>
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-bold">{item.price}</p>
                        <Button variant="outline" size="sm">Add to Cart</Button>
                    </div>
                 </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline flex items-center gap-2">
            <Shirt className="h-5 w-5 text-primary" />
            Merch
        </h2>
         <div className="grid grid-cols-2 gap-4">
          {merch.map((item) => (
            <Card key={item.title} className="overflow-hidden group">
                 <div className="relative h-48 w-full">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        data-ai-hint={item.hint}
                    />
                 </div>
                 <CardContent className="p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground h-10 truncate">{item.description}</p>
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-bold">{item.price}</p>
                        <Button variant="outline" size="sm">Add to Cart</Button>
                    </div>
                 </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}
