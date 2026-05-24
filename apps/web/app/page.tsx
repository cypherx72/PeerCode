'use client'
import { Button } from "@workspace/ui/components/button"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@workspace/ui/components/resizable"
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@workspace/ui/components/hover-card"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@workspace/ui/components/dropdown-menu"

export default function Page() {

  const {setTheme} = useTheme(); 
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
<DropdownMenu>
  <HoverCard openDelay={10} closeDelay={100}>
    <HoverCardTrigger asChild>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />

          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
    </HoverCardTrigger>

    <HoverCardContent className="flex w-auto flex-wrap flex-col gap-1">
      <p className="text-sm font-medium">
        Toggle theme{" "}
        <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          Shift + D
        </kbd>
      </p>

      
    </HoverCardContent>
  </HoverCard>

  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>
      Light
    </DropdownMenuItem>

    <DropdownMenuItem onClick={() => setTheme("dark")}>
      Dark
    </DropdownMenuItem>

    <DropdownMenuItem onClick={() => setTheme("system")}>
      System
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


        
      </div>
    </div>
  )
}
