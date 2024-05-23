"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Pencil } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { resolvedTheme: theme, setTheme } = useTheme();

  return (
    <div className="w-full h-full">
      <div className="p-4 md:p-8 md:pt-16 md:px-16 lg:px-32 flex flex-col items-center">
        <div className="text-4xl font-semibold max-w-xl w-full">Settings</div>
      </div>

      <div className="p-4 md:px-16 lg:px-32 flex flex-col items-center">
        <div className="max-w-xl w-full">
          <div className="text-2xl font-semibold">General</div>

          <div className="mt-2 p-4 rounded-lg bg-white border dark:bg-foreground/5">
            <div className="flex gap-2 items-center justify-between">
              <div>
                <div className="font-semibold">Appearance</div>
                <div className="text-sm opacity-50">
                  Set your preferred theme for vietnamstay
                </div>
              </div>
              <Select
                value={theme}
                onValueChange={(value) => setTheme(value as string)}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator className="my-2" />

            <div className="flex gap-2 items-center justify-between">
              <div>
                <div className="font-semibold">Language</div>
                <div className="text-sm opacity-50">
                  Set your preferred language for vietnamstay
                </div>
              </div>
              <Select value="en">
                <SelectTrigger className="w-[120px]">
                  <SelectValue
                    defaultValue="en"
                    placeholder="Select language"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="vi" disabled>
                      Tiếng Việt
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-8 text-2xl font-semibold">Notification</div>

          <div className="mt-2 p-4 rounded-lg bg-white border dark:bg-foreground/5">
            <div className="flex gap-2 items-center justify-between">
              <div>
                <div className="font-semibold">Push Notification</div>
                <div className="text-sm opacity-50">
                  Enable or disable push notification
                </div>
              </div>
              <Switch />
            </div>

            <Separator className="my-2" />

            <div className="flex gap-2 items-center justify-between">
              <div>
                <div className="font-semibold">Email Notification</div>
                <div className="text-sm opacity-50">
                  Enable or disable email notification
                </div>
              </div>
              <Switch />
            </div>
          </div>

          <div className="mt-8 text-2xl font-semibold">Account</div>

          <div className="mt-2 p-4 rounded-lg bg-white border dark:bg-foreground/5">
            <div className="flex gap-2 relative items-center justify-between">
              <div className="font-semibold">Avatar</div>
              <div className="group cursor-pointer">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>P</AvatarFallback>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/81307469"></AvatarImage>
                </Avatar>
                <button className="absolute group-hover:bg-white transition -bottom-1 -right-1 p-1 bg-zinc-300 dark:bg-[#8e8e90] border text-black rounded-full">
                  <Pencil className="h-3 w-3" />
                </button>
              </div>
            </div>
            <Separator className="mb-2 mt-4" />
            <div className="flex gap-2 items-center justify-between">
              <div className="font-semibold">Username</div>
              <div className="text-sm opacity-50">vohoangphuc</div>
            </div>
            <Separator className="my-2" />
            <div className="flex gap-2 items-center justify-between">
              <div className="font-semibold">Email</div>
              <div className="text-sm opacity-50">s3926761@rmit.edu.vn</div>
            </div>
          </div>

          <button className="mt-8 flex items-center justify-center gap-2 text-white md:hover:bg-brand-hover transition h-fit bg-brand rounded-lg text-center w-full px-4 py-3 font-semibold text-sm">
            Sign out
          </button>
          <div className="flex items-center justify-center">
            <Button className="text-red-500 dark:text-red-300" variant="link">
              Delete account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
