import React, { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext({
    theme: "system",
    setTheme: () => null,
})

export default function ThemeProvider({
                                          children,
                                          defaultTheme = "system",
                                          storageKey = "vite-ui-theme",
                                          ...props
                                      }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem(storageKey) || defaultTheme
    })

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
            root.classList.add(systemTheme)
        } else {
            root.classList.add(theme)
        }
    }, [theme])

    const value = {
        theme,
        setTheme: (newTheme) => {
            const root = document.documentElement

            // 🎬 Transitionları müvəqqəti söndür
            root.classList.add("theme-changing")

            // 🌗 Yeni temanı yadda saxla və tətbiq et
            localStorage.setItem(storageKey, newTheme)
            setTheme(newTheme)

            // ⏳ 400ms sonra keçidləri bərpa et
            setTimeout(() => {
                root.classList.remove("theme-changing")
            }, 400)
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeProviderContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
