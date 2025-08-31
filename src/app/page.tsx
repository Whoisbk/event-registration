import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PartyPopper, Users, Calendar, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-bounce">
              <PartyPopper className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-balance">
              Party Time!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join the ultimate event platform where every celebration becomes unforgettable
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              <Link href="/register">Get Started 🎉</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Connect</h3>
            <p className="text-muted-foreground">Meet amazing people and build lasting friendships at every event</p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Discover</h3>
            <p className="text-muted-foreground">Find the perfect events that match your interests and schedule</p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Celebrate</h3>
            <p className="text-muted-foreground">Create unforgettable memories at events designed for pure joy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
