import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Package2, Menu, CircleUser } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
const Navbar = () => {
  return (
    <div className="flex w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base justify-left ml-auto"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="flex flex-row gap-5 items-center">
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Driver
            </Link>
            <Link
              to="/dispatch"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Dispatch
            </Link>
            <Link
              to="/order-status"
              className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
            >
              Order Status
            </Link>
            <Link
              to="/locations"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Locations
            </Link>
            <Link
              to="/users"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Users
            </Link>
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Driver
              </Link>
              <Link
                to="/dispatch"
                className="text-muted-foreground hover:text-foreground"
              >
                Dispatch
              </Link>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Order Status
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Locations
              </a>
              <Link
                to="/users"
                className="text-muted-foreground hover:text-foreground"
              >
                Users
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 flex-end mr-0 justify-end ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
