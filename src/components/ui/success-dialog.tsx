"use client"

import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight } from "lucide-react"
import Link from "next/link"

interface SuccessDialogProps {
    isOpen: boolean
    onClose: (value: boolean) => void
    userCode: string
}

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

export function SuccessDialog({ isOpen, onClose, userCode }: SuccessDialogProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md bg-gradient-to-br from-[#FAF5EF] to-[#FDFCFC]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={staggerContainer}
                >
                    <DialogHeader className="flex justify-center items-center">
                        <DialogTitle className="leading-[100%] text-center text-[26px] font-bold bg-linear-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] bg-clip-text text-transparent"> Welcome to Me Time!</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center space-y-6 py-6">
                        <motion.div
                            className="relative"
                            variants={popIn}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-[#FAF5EF] to-[#FDFCFC] rounded-full flex items-center justify-center">
                                <motion.div
                                // animate={{ scale: [1, 1.2, 1] }}
                                // transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <CheckCircle className="w-12 h-12 text-green-500" />
                                </motion.div>
                            </div>

                        </motion.div>

                        <motion.div variants={fadeIn} className="text-center space-y-2">
                            <p className="text-lg font-semibold text-foreground">Please Continue to the registration desk to receive your wrist band</p>
                            {/* <motion.div
                                className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-lg p-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <code className="text-2xl font-bold text-primary tracking-wider">{userCode}</code>
                            </motion.div> */}
                            {/* <p className="text-sm text-muted-foreground">
                                Save this code - you&apos;ll need to show it to the host to get your wrist band
                            </p> */}
                        </motion.div>

                        <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Link href="/login">
                                <Button

                                    className="group h-[48px] w-[170px] hover:w-[187px] font-bold  text-[20px] rounded-full text-base hover:cursor-pointer bg-[#D6215E] hover:bg-linear-to-r hover:from-[#FC904E] hover:via-[#FF3450]/90 hover:to-[#FF00F8] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    Okay got it <ChevronRight className="w-6 h-5 text-white hidden group-hover:inline-block" />
                                </Button>
                            </Link>

                        </motion.div>
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    )
}
