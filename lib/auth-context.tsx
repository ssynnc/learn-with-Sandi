"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => { success: boolean; message: string }
  signup: (name: string, email: string, password: string) => { success: boolean; message: string }
  logout: () => void
  purchasedCourses: string[]
  purchaseCourse: (courseId: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [purchasedCourses, setPurchasedCourses] = useState<string[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("sws_user")
    if (stored) {
      setUser(JSON.parse(stored))
    }
    const purchased = localStorage.getItem("sws_purchased")
    if (purchased) {
      setPurchasedCourses(JSON.parse(purchased))
    }
  }, [])

  const login = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("sws_users") || "[]")
    const found = users.find(
      (u: { email: string; password: string }) => u.email === email && u.password === password
    )
    if (found) {
      const userData = { name: found.name, email: found.email }
      setUser(userData)
      localStorage.setItem("sws_user", JSON.stringify(userData))
      return { success: true, message: "Login successful!" }
    }
    return { success: false, message: "Invalid email or password." }
  }

  const signup = (name: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("sws_users") || "[]")
    const exists = users.find((u: { email: string }) => u.email === email)
    if (exists) {
      return { success: false, message: "Email already registered." }
    }
    users.push({ name, email, password })
    localStorage.setItem("sws_users", JSON.stringify(users))
    const userData = { name, email }
    setUser(userData)
    localStorage.setItem("sws_user", JSON.stringify(userData))
    return { success: true, message: "Account created successfully!" }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("sws_user")
  }

  const purchaseCourse = (courseId: string) => {
    const updated = [...purchasedCourses, courseId]
    setPurchasedCourses(updated)
    localStorage.setItem("sws_purchased", JSON.stringify(updated))
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, purchasedCourses, purchaseCourse }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
