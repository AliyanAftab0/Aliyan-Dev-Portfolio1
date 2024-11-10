"use client"
import { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)  // Default to light mode

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    // Animation variants with 3D rotation, elastic scale, and pulse glow
    const iconVariants = {
        initial: { rotateY: 0, scale: 1, opacity: 0.5, filter: "drop-shadow(0 0 0px transparent)", perspective: 1000 },
        animate: { 
            rotateY: 180, 
            scale: [1, 1.2, 1],
            opacity: 1, 
            filter: darkMode ? "drop-shadow(0 0 15px #FFD700)" : "drop-shadow(0 0 15px #4B5563)", // Pulse glow effect
            transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1], // Custom ease-in-out
            }
        },
        exit: { 
            rotateY: -180, 
            scale: 1, 
            opacity: 0.5,
            filter: "drop-shadow(0 0 0px transparent)",
            transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1], 
            }
        },
    }

    return (
        <div>
            <motion.button 
                className={`p-3 rounded-full transition-colors duration-600 ${darkMode ? 'bg-gray-900 text-white' : 'bg-slate-100 text-yellow-400'}`} // Yellow color for the sun icon
                onClick={() => setDarkMode(!darkMode)}
                initial={{ backgroundColor: darkMode ? '#4B5563' : '#F3F4F6' }}
                animate={{ backgroundColor: darkMode ? '#4B5563' : '#F3F4F6' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {darkMode ? (
                        <motion.div
                            key="moon"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <FaMoon size={18} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <BsSunFill size={18} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}

export default ThemeToggle
