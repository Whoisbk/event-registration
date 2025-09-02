"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FieldInput } from "@/components/ui/field-input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SuccessDialog } from "@/components/ui/success-dialog"
import { ErrorDialog } from "@/components/ui/error-dialog"
import Link from "next/link"
import { PartyPopper, Mail, User, Phone, Smartphone, ChevronLeft, UserRound } from "lucide-react"
import Image from "next/image"
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
                const eventCode = `PARTY${Math.random().toString(36).substring(2, 8).toUpperCase()}`
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
            className="h-screen bg-gradient-to-br from-[#EBC894] via-background to-[#bba8f5] flex items-center justify-center py-4 px-[24px]"
        >


            <motion.div variants={popIn} className="w-full max-w-md">
                <div className="relative">
                    <div className="absolute top-4 left-4 bg-white w-[40px] h-[40px] rounded-full p-2">
                        <Link href="/">
                            <ChevronLeft className="w-full h-full" />
                        </Link>
                    </div>
                    <div className="p-[1px] rounded-3xl bg-gradient-to-r from-[#D0F5FC] to-[#3F9CAB]">
                        <Card className="shadow-2xl bg-gradient-to-br from-[#FAF5EF] to-[#FDFCFC] rounded-3xl border-0">
                            <CardHeader className="text-center space-y-3">
                                <Image
                                    src={Logo}
                                    alt="Logo"
                                    width={80}
                                    height={75.5}
                                    className=" object-contain mx-auto"
                                />
                                <motion.div variants={fadeIn} className="gap-12">
                                    <CardTitle className="text-[30px] font-bold bg-linear-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] bg-clip-text text-transparent">
                                        Online Check-in
                                    </CardTitle>
                                    <CardDescription className="text-[16px] mt-1">
                                        Fill in your details below and skip the queue at the venue.
                                    </CardDescription>
                                </motion.div>
                            </CardHeader>

                            <CardContent>
                                <motion.form onSubmit={handleSubmit} className="space-y-[26px]" variants={staggerContainer}>
                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="firstName"
                                            type="text"
                                            label="First Name"
                                            icon={<UserRound className="w-5 h-5" />}
                                            placeholder="Enter your first name"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            required
                                        />
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="lastName"
                                            type="text"
                                            label="Surname"
                                            icon={<UserRound className="w-5 h-5" />}
                                            placeholder="Enter your surname"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            required
                                        />
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="email"
                                            type="email"
                                            label="Email Address"
                                            icon={<Mail className="w-5 h-5" />}
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="phoneNumber"
                                            type="tel"
                                            label="Phone Number"
                                            icon={<Smartphone className="w-5 h-5" />}
                                            placeholder="Enter your phone number"
                                            value={formData.phoneNumber}
                                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                            required
                                        />
                                    </motion.div>

                                    <motion.div className="flex justify-end" variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className=" h-[48px] w-[150px] font-bold  text-[20px] rounded-full text-base hover:cursor-pointer bg-[#D6215E] hover:bg-gradient-to-r from-primary via-[#FC904E] to-accent hover:from-primary/90 hover:via-[#D6215E]/90 hover:to-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                <SuccessDialog key="success-dialog" isOpen={showSuccess} onClose={setShowSuccess} userCode={userCode} />
                <ErrorDialog key="error-dialog" isOpen={showError} onClose={setShowError} />
            </AnimatePresence>
        </motion.div>
    )
}   