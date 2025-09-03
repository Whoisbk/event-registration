"use client"

import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCwIcon } from "lucide-react"
import { useRouter } from "next/navigation"

interface ErrorDialogProps {
    isOpen: boolean
    onClose: (value: boolean) => void
    message: string
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

export function ErrorDialog({ isOpen, onClose, message }: ErrorDialogProps) {
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
                        <DialogTitle className="text-center leading-[100%] text-[26px] font-bold bg-linear-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] bg-clip-text text-transparent">
                           {message}
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
                            <div className="w-20 h-20 bg-gradient-to-br from-[#FAF5EF] to-[#FDFCFC] rounded-full flex items-center justify-center">
                                <motion.div
                                className="bg-none"
                                    // animate={{ scale: [1, 1.2, 1] }}
                                    // transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <AlertCircle className="w-12 h-12 text-red-500" />
                                </motion.div>
                            </div>
                            
                        </motion.div>

                        <motion.div variants={fadeIn} className="text-center space-y-2">
                            <p className="text-lg font-semibold text-foreground">Account Not Found</p>
                            <p className="text-sm text-muted-foreground">
                                Looks like you haven&apos;t me time yet! Create an account to get your exclusive event code.
                            </p>
                        </motion.div>

                        <div className="flex flex-col w-full space-y-3 justify-center items-center">
                            <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    onClick={() => {
                                        onClose(false)
                                        router.push("/register")
                                    }}
                                    className="group h-[48px] w-[170px] hover:w-[187px] font-bold  text-[20px] rounded-full text-base hover:cursor-pointer bg-[#D6215E] hover:bg-linear-to-r hover:from-[#FC904E] hover:via-[#FF3450]/90 hover:to-[#FF00F8] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    Join Me Time!
                                </Button>
                            </motion.div>
                            <motion.div variants={fadeIn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button variant="outline" onClick={() => onClose(false)} 
                                className="group h-[48px] text-white w-[170px] hover:w-[187px] font-bold text-[20px] rounded-full text-base hover:cursor-pointer bg-[#D6215E] hover:bg-linear-to-r hover:from-[#FC904E] hover:via-[#FF3450]/90 hover:to-[#FF00F8] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                                    Try Again <RefreshCwIcon className="pl-2 w-6 h-5 text-white" />
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    )
}
