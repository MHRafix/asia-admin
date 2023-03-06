import { Navbar, NavLink } from "@mantine/core";

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import IconApps from "../icons/IconApps";
import IconBooking from "../icons/IconBooking";
import IconDashboard from "../icons/IconDashboard";
import IconReports from "../icons/IconReports";
import IconSettings from "../icons/IconSettings";

const data = [
  {
    label: "Dashboard",
    icon: IconDashboard,
    href: "/",
  },
  {
    label: "Booking",
    icon: IconBooking,
    href: "/booking",
  },
  {
    label: "Customers",
    icon: IconBooking,
    href: "/customers",
  },
  {
    label: "Reports",
    icon: IconReports,
    href: "/reports",
  },
  {
    label: "Apps",
    icon: IconApps,
    href: "/apps",
  },
  {
    label: "Settings",
    icon: IconSettings,
    href: "/settings",
  },
];

interface Props {
  opened: boolean;
  style: string;
  width: any;
  height: number;
}

const AdminMenu: React.FC<Props> = ({ opened, style, width, height }) => {
  const { query, asPath } = useRouter();

  const getNavIdentifier = (path: string, hasId: boolean) => {
    if (!hasId) {
      return path;
    }

    const pathArray = path.split("/");
    const item = pathArray[pathArray.length - 1];
    return item;
  };
  return (
    <div className="">
      <Navbar
        p="md"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 200, lg: 300, ...width }}
        style={{ background: "#212231" }}

        // height={ { sm: 100, lg:500}}
      >
        <Navbar.Section mt="xs">
          {data.map((item) => (
            <NavLink
              // style={{ background: "#1D1E2C" }}
              styles={{
                label: {
                  // background: "#1D1E2C",
                  color:
                    getNavIdentifier(asPath, Boolean(query.id)) === item.href
                      ? "red"
                      : "white",
                },
                // root:{background: "#1D1E2C"}
              }}
              active={getNavIdentifier(asPath, Boolean(query.id)) === item.href}
              key={item.label}
              label={item.label}
              icon={
                <item.icon
                  isActive={
                    getNavIdentifier(asPath, Boolean(query.id)) === item.href
                  }
                />
              }
              component={Link}
              href={item.href}
            />
          ))}
        </Navbar.Section>
      </Navbar>
    </div>
  );
};

export default AdminMenu;
