import { Search, ListFilter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
const MapSearchAndFilter = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center mb-5 gap-4">
      <p className="text-xl whitespace-nowrap">My Deliveries</p>
      <div className="w-full lg:w-auto flex flex-row items-center gap-5 justify-end ml-auto">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="rounded-lg bg-background pl-8 "
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-7 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" classname="z-10">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>All</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Drop-off</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Pickup</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MapSearchAndFilter;
