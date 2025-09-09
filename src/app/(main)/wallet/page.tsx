import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CreditCard, History, భారతీయ రూపాయి } from "lucide-react";

const rechargePacks = [
  { amount: 99, color: "bg-green-100", textColor: "text-green-800" },
  { amount: 199, color: "bg-blue-100", textColor: "text-blue-800" },
  { amount: 499, color: "bg-purple-100", textColor: "text-purple-800" },
];

export default function WalletPage() {
  return (
    <div className="p-4 sm:p-6 space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold font-headline">Wallet</h1>
        <p className="text-muted-foreground">Manage your balance and view transaction history.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Recharge Now
        </h2>
        <div className="grid grid-cols-3 gap-4">
            {rechargePacks.map((pack) => (
                <Card key={pack.amount} className={`text-center ${pack.color} border-none`}>
                    <CardContent className="pt-6">
                        <p className={`text-3xl font-bold ${pack.textColor}`}>₹{pack.amount}</p>
                        <Button variant="secondary" size="sm" className="mt-4 w-full">Recharge</Button>
                    </CardContent>
                </Card>
            ))}
        </div>
        <Card>
            <CardContent className="pt-6">
                <p className="text-sm text-center text-muted-foreground">
                    Payments are processed securely via Razorpay (UPI, Cards).
                </p>
            </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-headline flex items-center gap-2">
            <History className="h-5 w-5 text-primary" />
            Recharge History
        </h2>
        <Card>
           <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground">You have no recent transactions.</p>
           </CardContent>
        </Card>
      </section>
      
      <section className="space-y-4">
         <Card>
           <CardContent className="pt-6 flex items-center justify-between">
            <div>
                <Label htmlFor="auto-topup" className="font-semibold text-base">Auto Top-up</Label>
                <p className="text-sm text-muted-foreground">Automatically recharge when your balance is low.</p>
            </div>
            <Switch id="auto-topup" />
           </CardContent>
        </Card>
      </section>

    </div>
  );
}
