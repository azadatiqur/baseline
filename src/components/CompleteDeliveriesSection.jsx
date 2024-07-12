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
import CompleteDeliveries from "./CompleteDeliveries";
const CompleteDeliveriesSection = () => {
  return (
    <div className="border border-gray-100 mt-10 ml-14 mr-14 rounded-lg flex flex-col flex-wrap sm:flex-nowrap sm:flex-row justify-between">
      <div className="w-full m-4">
        <div className="flex flex-row">
          <p className="text-xl">Complete</p>
          <div className="flex flex-row items-center gap-5 justify-end ml-auto">
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
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
      </div>

      {/* <div className="w-full m-4">
        <CompleteDeliveries />
      </div> */}
    </div>
  );
};

export default CompleteDeliveriesSection;
