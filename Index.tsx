import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star, Smartphone, Heart, Target, Users, MessageCircle, Menu, X, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div className="min-h-screen bg-background">
      {/* Hamburger Menu Button */}
      <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="fixed top-4 left-4 z-50 w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground p-0" size="icon">
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-card border-r border-border z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 pt-20">
          <h2 className="text-2xl font-bold text-primary mb-8">UBERGOLFETTE</h2>
          <nav className="space-y-4">
            <a href="#accueil" className="block text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </a>
            <a href="#services" className="block text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#a-propos" className="block text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              À propos
            </a>
            <a href="#valeurs" className="block text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Nos valeurs
            </a>
            <a href="#mission" className="block text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Notre mission
            </a>
            <a href="#jeu" className="block text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Jeu
            </a>
            <a href="#whatsapp" className="block text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              WhatsApp
            </a>
            <a href="#contact" className="block text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setIsMenuOpen(false)} />}

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">UBERGOLFETTE</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">Accueil</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#a-propos" className="text-foreground hover:text-primary transition-colors">À propos</a>
            <a href="#jeu" className="text-foreground hover:text-primary transition-colors">Jeu</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button asChild className="hidden md:block">
            <Link to="/download">Télécharger l'app</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Réservez votre <span className="text-primary">Golfette</span> en un clic
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            UBERGOLFETTE révolutionne vos déplacements avec un service de taxi unique et pratique. 
            Réservez facilement votre golfette via notre application mobile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/download">
                <Smartphone className="mr-2" />
                Télécharger l'app
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/about">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Nos Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez tous les avantages de nos golfettes pour vos déplacements urbains
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Réservation instantanée</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Réservez votre golfette en quelques secondes via notre application mobile intuitive
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Disponible pendant les vacances</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nos golfettes sont disponibles à toute heure pour répondre à vos besoins de transport
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Service impeccable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Conducteurs professionnels, véhicules entretenus et service client de qualité
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8" onClick={() => window.open('https://services-ubergolfette.lovable.app', '_blank')}>
              PLUS DE SERVICES
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-6">À propos d'UBERGOLFETTE</h3>
              <p className="text-lg text-muted-foreground mb-6">
                UBERGOLFETTE est une entreprise innovante qui utilise l'accès aux golfettes 
                pour le transport urbain. Notre mission est de proposer une alternative unique , 
                pratique et GRATUIT aux moyens de transport traditionnels.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Grâce à notre application mobile, vous pouvez réserver votre trajet en golfette 
                ,discuter avec nos utilisateur , achecter des produits et bien plus encore ...
              </p>
              <Button asChild size="lg">
                <Link to="/about">Découvrir notre histoire</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center overflow-hidden">
              <img src="/lovable-uploads/af5a3a08-905d-41c3-b3fd-61de68f85dde.png" alt="Voiturette de golf UBERGOLFETTE" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="valeurs" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nos Valeurs</h2>
            <p className="text-lg text-muted-foreground">
              Les principes qui guident notre mission quotidienne
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20 bg-gradient-to-b from-card to-primary/5">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Accessibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un service gratuit et accessible à tous, partout où nos golfettes circulent
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/20 bg-gradient-to-b from-card to-secondary/5">
              <CardHeader>
                <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Une approche technologique moderne pour repenser la mobilité urbaine
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-accent/20 bg-gradient-to-b from-card to-accent/5">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Communauté</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Créer des liens entre les utilisateurs grâce à notre plateforme sociale intégrée
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Notre Mission</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Révolutionner la mobilité urbaine en proposant une alternative gratuite, 
              unique et amusante aux transports traditionnels.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Transport Gratuit</h3>
                <p className="text-sm text-muted-foreground">Service de golfettes 100% gratuit pour tous</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Disponibilité</h3>
                <p className="text-sm text-muted-foreground">Service disponible pendant les vacances</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Écosystème Complet</h3>
                <p className="text-sm text-muted-foreground">Application avec chat, marketplace et plus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jeu Section */}
      <section id="jeu" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">UBERGOLFETTE Simulateur</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez notre jeu exclusif ! Prenez le volant d'une golfette et naviguez sur trois voies 
              en évitant les obstacles. Un jeu addictif inspiré de notre univers UBERGOLFETTE.
            </p>
            
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Trois routes</h3>
                  <p className="text-sm text-muted-foreground">Déplacez votre golfette de voie en voie</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Évitez les Obstacles</h3>
                  <p className="text-sm text-muted-foreground">Attention aux plantes sur la route !</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Score par PALIERS</h3>
                  <p className="text-sm text-muted-foreground">Le score permet d'augmenter de palier !</p>
                </div>
              </div>
              
              <Button size="lg" className="text-lg px-8" onClick={() => window.open('https://ubergolfette-simulateur.lovable.app/', '_blank')}>
                <Target className="mr-2" />
                Jouer Maintenant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section id="whatsapp" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">RESTEZ AU COURANT DES NOUVEAUTÉS</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Rejoignez notre chaîne WhatsApp officielle pour être les premiers informés de toutes les actualités, 
              nouveautés et mises à jour d'UBERGOLFETTE !
            </p>
            
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
              <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Chaîne WhatsApp Officielle</h3>
              <p className="text-muted-foreground mb-6">
                Recevez en temps réel toutes les informations importantes : Nouvelles offres, 
                fonctionnalités de l'application et bien plus encore !
              </p>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" onClick={() => window.open('https://www.whatsapp.com/channel/0029Vb7E4xHKLaHgPQQjZT38', '_blank')}>
                <MessageCircle className="mr-2" />
                Rejoindre la chaîne WhatsApp
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Nouveautés en Premier</h3>
                <p className="text-sm text-muted-foreground">Soyez les premiers à découvrir nos nouvelles fonctionnalités</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Imprevue sur la route</h3>
                <p className="text-sm text-muted-foreground">Informations : neige, pelouse... </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">SONDAGE</h3>
                <p className="text-sm text-muted-foreground">Participez à nos sondages pour améliorer l'application.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Contactez-nous</h3>
            <p className="text-lg text-muted-foreground">
              Une question ? Besoin d'aide ? Notre équipe est là pour vous accompagner
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Téléphone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Via le bouton en bas à droite</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <HelpCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Aide</CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={() => window.open('https://aide-ubergolfette.lovable.app', '_blank')}>
                  Accéder à l'aide
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contactez nous sur l'application</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <h4 className="text-lg font-bold text-foreground mb-4">UBERGOLFETTE</h4>
              <p className="text-muted-foreground">
                Votre solution de transport en golfette, simple et unique!
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground">
                © 2025 UBERGOLFETTE. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Help Floating Button */}
      <a href="https://aide-ubergolfette.lovable.app" target="_blank" rel="noopener noreferrer" className="fixed bottom-24 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
        <span className="text-lg">ℹ️</span>
      </a>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/33782648546" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>;
};
export default Index;