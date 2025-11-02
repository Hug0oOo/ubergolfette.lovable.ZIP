import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Bell, Download as DownloadIcon, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">UBERGOLFETTE</h1>
          </Link>
          <Link to="/">
            <Button variant="outline">Retour à l'accueil</Button>
          </Link>
        </div>
      </header>

      {/* Download Instructions */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <Smartphone className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Télécharger l'Application
            </h1>
            <p className="text-lg text-muted-foreground">
              Suivez ces étapes simples pour installer UBERGOLFETTE
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <Card className="border-primary/20 bg-gradient-to-r from-card to-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  Première étape - Téléchargement initial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cliquez sur le lien ci-dessous pour commencer le téléchargement :
                </p>
                <Button asChild className="w-full">
                  <a 
                    href="https://www.mobileapp.app/to/TLP40qp?ref=so" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <DownloadIcon className="mr-2" />
                    Télécharger l'app
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-secondary/20 bg-gradient-to-r from-card to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  Activer les notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <Bell className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                    ⚠️ Pensez à activer les notifications !
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-accent/20 bg-gradient-to-r from-card to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  Installation finale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Une fois connecté à l'application</strong>, utilisez ce lien pour finaliser l'installation :
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href="https://apps.wix.com/wixapp/api/v1/businesses/dd2dc228-8178-4ac5-856d-98bd23029c27/landing-page/?locale=fr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="mr-2" />
                    Finaliser l'installation
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Besoin d'aide ? Contactez notre équipe
            </p>
            <Link to="/#contact">
              <Button variant="outline">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;