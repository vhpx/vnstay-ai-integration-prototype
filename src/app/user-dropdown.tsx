import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Palette, User } from "lucide-react";
import { Suspense } from "react";
import { LogoutDropdownItem } from "./logout-dropdown-item";
import { ThemeDropdownItems } from "./theme-dropdown-items";
import { LanguageWrapper } from "./language-wrapper";
import { SystemLanguageWrapper } from "./system-language-wrapper";
import Link from "next/link";

export async function UserNav() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Avatar className="relative cursor-pointer overflow-visible font-semibold">
          <Suspense fallback={<AvatarFallback>?</AvatarFallback>}>
            <AvatarImage className="overflow-clip rounded-full" />
            <AvatarFallback className="font-semibold">
              <User className="h-5 w-5" />
            </AvatarFallback>
            <div className="border-background absolute bottom-0 right-0 z-20 h-3 w-3 rounded-full border-2 bg-green-500 dark:bg-green-400" />
          </Suspense>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col">
            <div className="line-clamp-1 w-fit break-all font-semibold">
              Võ Hoàng Phúc
            </div>
            <Link
              href="mailto:s3926761@rmit.edu.vn"
              className="line-clamp-1 w-fit break-all text-sm font-medium opacity-70 hover:underline"
            >
              s3926761@rmit.edu.vn
            </Link>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Palette className="mr-2 h-4 w-4" />
              <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <ThemeDropdownItems />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Globe className="mr-2 h-4 w-4" />
              <span>Language</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <LanguageWrapper locale="en" label="English" />
                <LanguageWrapper locale="vi" label="Tiếng Việt" disabled />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <LogoutDropdownItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
