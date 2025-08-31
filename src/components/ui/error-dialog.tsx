"use client"

import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PartyPopper, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface ErrorDialogProps {
    isOpen: boolean
    onClose: (value: boolean) => void
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

export function ErrorDialog({ isOpen, onClose }: ErrorDialogProps) {
    const router = useRouter()

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
                        <DialogTitle className="text-center text-2xl font-bold text-destructive">
                            Oops! Not Registered 😅
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
                                        onClose(false)
                                        router.push("/register")
                                    }}
                                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                                >
                                    Join the Party! 🎊
                                </Button>
                            </motion.div>
                            <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button variant="outline" onClick={() => onClose(false)} className="w-full">
                                    Try Again
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    )
}
