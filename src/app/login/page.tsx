"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FieldInput } from "@/components/ui/field-input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PartyPopper, Mail, User, CheckCircle, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
// import Logo from "../../../public/images/logo.png"
import Logo from "../../../public/images/LogoSVG.svg"

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
                const eventCode = `PARTY${Math.random().toString(36).substring(2, 8).toUpperCase()}`
                setUserCode(eventCode)
                setShowSuccessDialog(true)
            } else {
                setShowErrorDialog(true)
            }
        } catch {
            setShowErrorDialog(true)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="h-screen bg-gradient-to-br from-[#EBC894] to-[#B49EF4] flex items-center justify-center p-4"
        >
           

            <motion.div variants={popIn} className="w-full max-w-md">
                <div className="relative">
                    <div className="p-[2px] rounded-3xl bg-linear-to-r from-[#D0F5FC] to-[#3F9CAB]">
                        <Card className="shadow-2xl bg-gradient-to-br from-[#FAF5EF] to-[#FDFCFC] rounded-3xl border-0">
                            <CardHeader className="text-center space-y-3">
                                
                                    <Image
                                        src={Logo}
                                        alt="Logo"
                                        width={80}
                                        height={75.5}
                                        className=" object-contain mx-auto"
                                    />

                                <motion.div variants={fadeIn}>
                                    <CardTitle className="text-[26px] font-bold bg-gradient-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] bg-clip-text text-transparent">
                                        Online Check-in
                                    </CardTitle>
                                    <CardDescription className="text-base mt-1">Fill in your details below and skip the queue at the venue.</CardDescription>
                                </motion.div>
                            </CardHeader>

                            <CardContent>
                                <motion.form onSubmit={handleSubmit} className="space-y-5" variants={staggerContainer}>
                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="firstName"
                                            type="text"
                                            label="First Name"
                                            icon={<User className="w-4 h-4" />}
                                            placeholder="Enter your first name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="lastName"
                                            type="text"
                                            label="Surname"
                                            icon={<User className="w-4 h-4" />}
                                            placeholder="Enter your surname"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                        />
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="email"
                                            type="email"
                                            label="Email Address"
                                            icon={<Mail className="w-4 h-4" />}
                                            placeholder="your@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        className="flex justify-end"
                                        variants={fadeIn}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className=" h-[48px] w-[150px] text-[20px] rounded-full text-base hover:cursor-pointer justify-end font-semibold bg-[#D6215E] hover:bg-gradient-to-r from-primary via-[#FC904E] to-accent hover:from-primary/90 hover:via-[#D6215E]/90 hover:to-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            {isLoading ? "Checking in..." : "Check me in"}
                                        </Button>
                                    </motion.div>
                                </motion.form>
                            </CardContent>

                        </Card>
                    </div>
                </div>
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