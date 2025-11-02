import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { Shield, Lock } from "lucide-react";

interface CodeVerificationProps {
  onVerificationSuccess: () => void;
}

const CodeVerification = ({ onVerificationSuccess }: CodeVerificationProps) => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Code correct pour l'exemple - dans un vrai projet, ceci devrait être sécurisé
  const correctCode = "9472";

  const handleSubmit = async () => {
    if (code.length !== 4) {
      toast({
        title: "Code incomplet",
        description: "Veuillez saisir un code à 4 chiffres",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulation d'une vérification
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (code === correctCode) {
      localStorage.setItem("ubergolfette_verified", "true");
      toast({
        title: "Code vérifié",
        description: "Accès autorisé à l'application",
      });
      onVerificationSuccess();
    } else {
      toast({
        title: "Code incorrect",
        description: "Le code saisi n'est pas valide",
        variant: "destructive",
      });
      setCode("");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-primary/20 bg-card/95 backdrop-blur-sm shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            Code d'accès
          </CardTitle>
          <p className="text-muted-foreground">
            Saisissez votre code à 4 chiffres pour accéder à UBERGOLFETTE
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <InputOTP
              maxLength={4}
              value={code}
              onChange={(value) => setCode(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button 
            onClick={handleSubmit} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isLoading || code.length !== 4}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Vérification...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Vérifier le code
              </div>
            )}
          </Button>

        </CardContent>
      </Card>
    </div>
  );
};

export default CodeVerification;