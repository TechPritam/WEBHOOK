"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

export default function LoginForm() {

const CLIENT_ID = "e10bb98d40d83cb4579b";
const REDIRECT_URI = "http://localhost:8000/handleAuth";
const SCOPES = "user";
  const popupWidth = 600;
  const popupHeight = 700;
  const popupOptions = `
    width=${popupWidth},
    height=${popupHeight},
    top=${(window.innerHeight - popupHeight) / 2},
    left=${(window.innerWidth - popupWidth) / 2},
    resizable=yes,
    scrollbars=yes,
    status=no,
    toolbar=no,
    menubar=no,
    location=no`;
  const handleContinueWithGithub = async () => {
    console.log("handleContinueWithGithub");
    try {
      const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <div onClick={handleContinueWithGithub}>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="#" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
