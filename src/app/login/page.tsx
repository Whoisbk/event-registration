"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"
import { PartyPopper, Mail, User, CheckCircle, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

const popIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 30
        }
    },
    exit: { scale: 0.95, opacity: 0 }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [showSuccessDialog, setShowSuccessDialog] = useState(false)
    const [showErrorDialog, setShowErrorDialog] = useState(false)
    const [userCode, setUserCode] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            if (email == "test@test.com" && firstName == "TEST" && lastName == "TEST") {
                const eventCode = `PARTY${Math.random().toString(36).substr(2, 6).toUpperCase()}`
                setUserCode(eventCode)
                setShowSuccessDialog(true)
            } else {
                setShowErrorDialog(true)
            }
        } catch (_) {
            setShowErrorDialog(true)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-4"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <AnimatePresence>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute top-20 left-10 text-primary/20"
                    >
                        <PartyPopper size={32} />
                    </motion.div>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="absolute top-40 right-20 text-accent/20"
                    >
                        <PartyPopper size={24} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="absolute bottom-32 left-20 text-primary/20"
                    >
                        <PartyPopper size={28} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        className="absolute bottom-20 right-10 text-accent/20"
                    >
                        <PartyPopper size={20} />
                    </motion.div>
                </AnimatePresence>
            </div>

            <motion.div variants={popIn} className="w-full max-w-md">
                <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
                    <CardHeader className="text-center space-y-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center"
                        >
                            <PartyPopper className="w-8 h-8 text-white" />
                        </motion.div>
                        <motion.div variants={fadeIn}>
                            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Welcome to the Party!
                            </CardTitle>
                            <CardDescription className="text-lg mt-2">Ready to party? Verify your account or create an account</CardDescription>
                        </motion.div>
                    </CardHeader>

                    <CardContent>
                        <motion.form onSubmit={handleSubmit} className="space-y-6" variants={staggerContainer}>
                            <motion.div variants={fadeIn} className="space-y-2">
                                <Label htmlFor="firstName" className="text-sm font-medium">
                                    First Name
                                </Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                    <Input
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter your first name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="pl-10 h-12 border-2 focus:border-primary transition-colors"
                                        required
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="space-y-2">
                                <Label htmlFor="lastName" className="text-sm font-medium">
                                    Last Name
                                </Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                    <Input
                                        id="lastName"
                                        type="text"
                                        placeholder="Enter your last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="pl-10 h-12 border-2 focus:border-primary transition-colors"
                                        required
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">
                                    Email Address
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10 h-12 border-2 focus:border-primary transition-colors"
                                        required
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeIn}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isLoading ? "Verifying..." : "Verify & Party! 🎉"}
                                </Button>
                            </motion.div>
                        </motion.form>
                    </CardContent>

                    <CardFooter className="flex flex-col space-y-4">
                        <Separator />
                        <motion.p
                            variants={fadeIn}
                            className="text-center text-sm text-muted-foreground"
                        >
                            New to the party?{" "}
                            <Link href="/register" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                                Create an account here
                            </Link>
                        </motion.p>
                    </CardFooter>
                </Card>
            </motion.div>

            <AnimatePresence>
                {showSuccessDialog && (
                    <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                        <DialogContent className="sm:max-w-md">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={staggerContainer}
                            >
                                <DialogHeader>
                                    <DialogTitle className="text-center text-2xl font-bold text-primary">Welcome to the Party! 🎉</DialogTitle>
                                </DialogHeader>
                                <div className="flex flex-col items-center space-y-6 py-6">
                                    <motion.div
                                        className="relative"
                                        variants={popIn}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                <CheckCircle className="w-12 h-12 text-white" />
                                            </motion.div>
                                        </div>
                                        <motion.div
                                            className="absolute -top-2 -right-2"
                                            animate={{ y: [-4, 4, -4] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                        >
                                            <PartyPopper className="w-8 h-8 text-primary" />
                                        </motion.div>
                                    </motion.div>

                                    <motion.div variants={fadeIn} className="text-center space-y-2">
                                        <p className="text-lg font-semibold text-foreground">Your Wrist Band Code:</p>
                                        <motion.div
                                            className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-lg p-4"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <code className="text-2xl font-bold text-primary tracking-wider">{userCode}</code>
                                        </motion.div>
                                        <p className="text-sm text-muted-foreground">
                                            Save this code - you&apos;ll need to show it to the host to get your wrist band
                                        </p>
                                    </motion.div>

                                    <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            onClick={() => setShowSuccessDialog(false)}
                                            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                                        >
                                            Let&apos;s Party! 🎊
                                        </Button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </DialogContent>
                    </Dialog>
                )}

                {showErrorDialog && (
                    <Dialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
                        <DialogContent className="sm:max-w-md">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={staggerContainer}
                            >
                                <DialogHeader>
                                    <DialogTitle className="text-center text-2xl font-bold text-destructive">
                                        Oops! Not Registered
                                    </DialogTitle>
                                </DialogHeader>
                                <div className="flex flex-col items-center space-y-6 py-6">
                                    <motion.div
                                        className="relative"
                                        variants={popIn}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                <AlertCircle className="w-12 h-12 text-white" />
                                            </motion.div>
                                        </div>
                                        <motion.div
                                            className="absolute -top-2 -right-2"
                                            animate={{ y: [-4, 4, -4] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                        >
                                            <PartyPopper className="w-8 h-8 text-muted-foreground" />
                                        </motion.div>
                                    </motion.div>

                                    <motion.div variants={fadeIn} className="text-center space-y-2">
                                        <p className="text-lg font-semibold text-foreground">Account Not Found</p>
                                        <p className="text-sm text-muted-foreground">
                                            Looks like you haven&apos;t joined the party yet! Create an account to get your exclusive event code.
                                        </p>
                                    </motion.div>

                                    <div className="flex flex-col w-full space-y-3">
                                        <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                onClick={() => {
                                                    setShowErrorDialog(false)
                                                    router.push("/register")
                                                }}
                                                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                                            >
                                                Join the Party! 🎊
                                            </Button>
                                        </motion.div>
                                        <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button variant="outline" onClick={() => setShowErrorDialog(false)} className="w-full">
                                                Try Again
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </motion.div>
    )
}