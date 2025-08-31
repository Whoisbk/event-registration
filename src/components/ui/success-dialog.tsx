"use client"

import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PartyPopper, CheckCircle } from "lucide-react"

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
                                onClick={() => onClose(false)}
                                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                            >
                                Let&apos;s Party! 🎊
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    )
}
