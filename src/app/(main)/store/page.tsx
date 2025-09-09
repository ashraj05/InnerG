import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, ShoppingCart, QrCode } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "FocusFlow Poster",
    description: "A daily reminder to stay on track.",
    image: "https://picsum.photos/seed/poster/300/300",
    hint: "motivational poster",
    price: "$15",
  },
  {
    title: "Mindful Moment Bracelet",
    description: "A subtle, stylish cue to be present.",
    image: "https://picsum.photos/seed/bracelet/300/300",
    hint: "inspirational bracelet",
    price: "$25",
  },
  {
    title: "Digital Detox Pack",
    description: "Guided journals and meditations.",
    image: "https://picsum.photos/seed/digitalpack/300/300",
    hint: "journal illustration",
    price: "$10",
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
            <Zap className="h-5 w-5 text-primary" />
            Streak Unlocks
        </h2>
        <Card className="bg-gradient-to-r from-accent/80 to-primary/60 text-accent-foreground border-none">
          <CardContent className="pt-6 flex items-center justify-between">
            <div>
              <p className="font-bold text-lg">20% Off Voucher Unlocked!</p>
              <p className="text-sm text-accent-foreground/80">You've hit a 14-day streak!</p>
            </div>
            <Button variant="secondary">Claim</Button>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <Card key={product.title} className="overflow-hidden group">
                 <div className="relative h-48 w-full">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        data-ai-hint={product.hint}
                    />
                 </div>
                 <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <p className="text-sm text-muted-foreground h-10">{product.description}</p>
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-bold text-lg">{product.price}</p>
                        <Button variant="outline">Add to Cart</Button>
                    </div>
                 </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline flex items-center gap-2">
            <QrCode className="h-5 w-5 text-primary" />
            Physical Merch
        </h2>
         <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">Scan QR codes on our physical products to unlock exclusive in-app content and rewards!</p>
            <Button variant="secondary">Scan QR Code</Button>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}
