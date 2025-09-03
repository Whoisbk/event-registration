"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SuccessDialog } from "@/components/ui/success-dialog"
import { ErrorDialog } from "@/components/ui/error-dialog"
import Link from "next/link"
import { X } from "lucide-react"
import handImg from "../../../../public/images/undraw_confirmed_c5lo 1.svg"
import Image from "next/image"
import Ticket from "../../../../public/images/Entrance Ticket.svg"

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





export default function TicketPage() {
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



    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="h-screen bg-gradient-to-br from-[#EBC894] via-background to-[#bba8f5] opacity-[90%] flex items-center justify-center p-[24px]"
        >
            <motion.div variants={popIn} className="w-full max-w-md h-[530.88px]">
                <div className="relative">
                    <div className="absolute top-4 right-4 bg-[#F6F6F6] w-[40px] h-[40px] rounded-full p-2">
                        <Link href="/login">
                            <X className="w-full h-full" />
                        </Link>
                    </div>
                    <div className="p-[1px] rounded-3xl bg-gradient-to-r from-[#D0F5FC] to-[#3F9CAB]">
                        <Card className="shadow-2xl bg-gradient-to-br from-[#FAF5EF] to-[#FDFCFC] rounded-3xl border-0">
                            <CardHeader className="text-center space-y-3">
                                <Image
                                    src={handImg}
                                    alt="handImg"
                                    width={80}
                                    height={75.5}
                                    className=" object-contain mx-auto"
                                />
                                <motion.div variants={fadeIn} className="gap-12">
                                    <CardTitle className="text-[30px] font-bold bg-[#19839B] bg-clip-text text-transparent">
                                        Successful!
                                    </CardTitle>
                                    <CardDescription className="text-[16px] text-black font-bold mt-1">
                                        We’ve successfully checked you in, see your ticket below:
                                    </CardDescription>
                                </motion.div>
                            </CardHeader>

                            <CardContent>
                                <motion.div className="flex flex-col justify-center items-center space-y-[16px]" variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Image
                                        src={Ticket}
                                        alt="handImg"
                                        width={280}
                                        height={118}
                                        className=" object-contain mx-auto"
                                    />
                                    <span className="text-center font-[400] text-black">
                                        Save this code - you’ll need to present it to the to get your wristband at the venue.
                                    </span>
                                    <Link href="/login">
                                        <Button
                                            type="button"

                                            disabled={isLoading}
                                            className=" h-[48px] w-[150px] font-bold  text-[20px] rounded-full text-base hover:cursor-pointer bg-[#D6215E] hover:bg-gradient-to-r from-primary via-[#FC904E] to-accent hover:from-primary/90 hover:via-[#D6215E]/90 hover:to-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            Okay got it
                                        </Button>
                                    </Link>
                                </motion.div>
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