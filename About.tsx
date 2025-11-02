import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Clock, Smartphone, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Notre <span className="text-primary">Histoire</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez comment UBERGOLFETTE révolutionne le transport urbain avec une approche innovante et unique !
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">L'origine d'UBERGOLFETTE</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  UBERGOLFETTE est née d'une vision simple mais révolutionnaire : transformer les golfettes 
                  en un moyen de transport urbain accessible, pratique et <strong>entièrement gratuit</strong>.
                </p>
                <p>
                  Notre équipe a identifié un besoin croissant de solutions de mobilité alternatives que la marche.
                  Les golfettes, avec leur taille compacte et 
                  leur aspect unique, représentaient la solution parfaite.
                </p>
                <p>
                  Grâce à notre application mobile innovante, nous avons créé un écosystème complet qui va 
                  au-delà du simple transport : <strong>réservation de trajets, chat communautaire, 
                  marketplace intégrée</strong> et bien plus encore.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Smartphone className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">Innovation & Technologie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Rejoignez la Révolution UBERGOLFETTE
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Téléchargez notre application et découvrez une nouvelle façon de vous déplacer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/download">
                <Smartphone className="mr-2" />
                Télécharger l'app
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/#contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;