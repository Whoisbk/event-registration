"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SuccessDialog } from "@/components/ui/success-dialog"
import { ErrorDialog } from "@/components/ui/error-dialog"
import Link from "next/link"
import { PartyPopper, Mail, User, Phone } from "lucide-react"


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

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    })
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const [userCode, setUserCode] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            if (formData.email && formData.firstName && formData.lastName && formData.phoneNumber) {
                const eventCode = `PARTY${Math.random().toString(36).substr(2, 6).toUpperCase()}`
                setUserCode(eventCode)
                setShowSuccess(true)
            } else {
                setShowError(true)
            }
        } catch {
            setShowError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center p-4 relative overflow-hidden"
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
                <Card className="shadow-2xl border-2 border-primary/10 bg-card/95 backdrop-blur-sm">
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
                                Join the Party!
                            </CardTitle>
                            <CardDescription className="text-lg mt-2">Create your account to get started</CardDescription>
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
                                        placeholder="Enter your first name"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                                        placeholder="Enter your last name"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="pl-10 h-12 border-2 focus:border-primary transition-colors"
                                        required
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="space-y-2">
                                <Label htmlFor="phoneNumber" className="text-sm font-medium">
                                    Phone Number
                                </Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                    <Input
                                        id="phoneNumber"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        className="pl-10 h-12 border-2 focus:border-primary transition-colors"
                                        required
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-200 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isLoading ? "Creating Account..." : "Join the Party! 🎉"}
                                </Button>
                            </motion.div>
                        </motion.form>
                    </CardContent>

                    <CardFooter className="flex flex-col space-y-4">
                        <Separator />
                        <motion.p variants={fadeIn} className="text-center text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                                Sign in here
                            </Link>
                        </motion.p>
                    </CardFooter>
                </Card>
            </motion.div>

            <AnimatePresence>
                <SuccessDialog isOpen={showSuccess} onClose={setShowSuccess} userCode={userCode} />
                <ErrorDialog isOpen={showError} onClose={setShowError} />
            </AnimatePresence>
        </motion.div>
    )
}   