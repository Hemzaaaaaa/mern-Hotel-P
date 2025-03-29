"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignInForm } from "./sign-in-form"
import { SignUpForm } from "./sign-up-form"
import { Button } from "@/components/ui/button"
import React from "react"

export function AuthModals() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("signin")

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      // Reset to sign-in tab when dialog closes
      setTimeout(() => setActiveTab("signin"), 300)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            onClick={() => {
              setActiveTab("signin")
              setIsOpen(true)
            }}
          >
            Sign In
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              {activeTab === "signin" ? "Welcome Back" : "Create an Account"}
            </DialogTitle>
            <DialogDescription className="text-center">
              {activeTab === "signin" ? "Sign in to access your account" : "Sign up to enjoy our services"}
            </DialogDescription>
          </DialogHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="mt-4">
              <SignInForm onSuccess={() => setIsOpen(false)} />
            </TabsContent>
            <TabsContent value="signup" className="mt-4">
              <SignUpForm onSuccess={() => setIsOpen(false)} />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="bg-red-600 hover:bg-red-700"
            onClick={() => {
              setActiveTab("signup")
              setIsOpen(true)
            }}
          >
            Sign Up
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  )
}

