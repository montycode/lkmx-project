import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

export const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" passHref className={navigationMenuTriggerStyle()}>
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/users" passHref className={navigationMenuTriggerStyle()}>
            Users
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
