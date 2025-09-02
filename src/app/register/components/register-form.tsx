"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { FieldInput } from "@/components/ui/field-input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ErrorDialog } from "@/components/ui/error-dialog"
import Link from "next/link"
import { Mail, Smartphone, ChevronLeft, UserRound, ChevronRight } from "lucide-react"
import Image from "next/image"
import Logo from "../../../../public/images/LogoSVG.svg"
import { useRouter } from "next/navigation"
import { getUserbyName } from "@/lib/actions/user/user.action"

// Zod validation schema
const registrationSchema = z.object({
    firstName: z.string().min(1, "First name is required").min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(1, "Surname is required").min(2, "Surname must be at least 2 characters"),
    email: z.string().min(1, "Email is required").refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
        message: "Please enter a valid email address"
    }),
    phoneNumber: z.string().min(1, "Phone number is required").min(10, "Phone number must be at least 10 digits").refine((val) => /^[0-9+\-\s()]+$/.test(val), {
        message: "Please enter a valid phone number"
    })
})

type RegistrationFormData = z.infer<typeof registrationSchema>

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

export default function RegisterForm() {
    const [showError, setShowError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegistrationFormData>({
        resolver: zodResolver(registrationSchema),
        mode: "onChange" // Validate on change for real-time feedback
    })

    const onSubmit = async (data: RegistrationFormData) => {
        setIsLoading(true)

        try {
            // Simulate form submission
            const res = await getUserbyName(data.firstName, data.lastName, data.email, data.phoneNumber)
            if (res.code) {
                router.push(`/ticket?code=${res.code}&name=${res.first_name}&last_name=${res.last_name}&phone_number=${res.phone_number}`)
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
            className="h-screen bg-gradient-to-br from-[#EBC894] via-background to-[#bba8f5] flex items-center justify-center p-[24px] "
        >


            <motion.div variants={popIn} className="w-full max-w-md h-[606px] gap-[36px]">
                <div className="relative">
                    <div className="absolute top-4 left-4 bg-white w-[40px] h-[40px] rounded-full p-2">
                        <Link href="/">
                            <ChevronLeft className="w-full h-full" />
                        </Link>
                    </div>
                    <div className="p-[1px] rounded-3xl bg-gradient-to-r from-[#D0F5FC] to-[#3F9CAB]">
                        <Card className="shadow-2xl bg-gradient-to-br from-[#FAF5EF] to-[#FDFCFC] rounded-3xl border-0">
                            <CardHeader className="text-center mb-2">
                                <Image
                                    src={Logo}
                                    alt="Logo"
                                    width={80}
                                    height={75.5}
                                    className=" object-contain mx-auto"
                                />
                                <motion.div variants={fadeIn} className="gap-12">
                                    <CardTitle className="leading-[100%] text-[26px] font-bold bg-linear-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] bg-clip-text text-transparent">
                                        Online Check-in
                                    </CardTitle>
                                    <CardDescription className="text-[16px] mt-1 text-black font-[400] leading-[100%] w-full">
                                        Fill in your details below and skip the queue at the venue.
                                    </CardDescription>
                                </motion.div>
                            </CardHeader>

                            <CardContent>
                                <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-[26px]" variants={staggerContainer}>
                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="firstName"
                                            type="text"
                                            label="First Name"
                                            icon={<UserRound className="w-5 h-5" />}
                                            placeholder="Enter your first name"
                                            error={errors.firstName?.message}
                                            {...register("firstName")}
                                        />
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="lastName"
                                            type="text"
                                            label="Surname"
                                            icon={<UserRound className="w-5 h-5" />}
                                            placeholder="Enter your surname"
                                            error={errors.lastName?.message}
                                            {...register("lastName")}
                                        />
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="email"
                                            type="email"
                                            label="Email Address"
                                            icon={<Mail className="w-5 h-5" />}
                                            placeholder="your@email.com"
                                            error={errors.email?.message}
                                            {...register("email")}
                                        />
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <FieldInput
                                            id="phoneNumber"
                                            type="tel"
                                            label="Phone Number"
                                            icon={<Smartphone className="w-5 h-5" />}
                                            placeholder="Enter your phone number"
                                            error={errors.phoneNumber?.message}
                                            {...register("phoneNumber")}
                                        />
                                    </motion.div>

                                    <motion.div className="flex justify-end" variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="group h-[48px] w-[150px] hover:w-[167px] font-bold  text-[20px] rounded-full text-base hover:cursor-pointer bg-[#D6215E] hover:bg-linear-to-r hover:from-[#FC904E] hover:via-[#FF3450]/90 hover:to-[#FF00F8] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            {isLoading ? "Checking in..." : "Check me in"} <ChevronRight className="w-6 h-5 text-white hidden group-hover:inline-block" />
                                        </Button>

                                    </motion.div>
                                </motion.form>
                            </CardContent>


                        </Card>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>

                <ErrorDialog key="error-dialog" isOpen={showError} onClose={setShowError} />
            </AnimatePresence>
        </motion.div>
    )
}   