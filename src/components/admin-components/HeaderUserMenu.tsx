import { Avatar, Menu } from "@mantine/core";
import IconBall from "../icons/adminNavbarIcons/IconBall";
import IconSearch from "../icons/adminNavbarIcons/IconSearch";
// import { IconMessageCircle, IconSettings } from "@tabler/icons";

const HeaderUserMenu = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <IconSearch />
      </Menu.Target>
      <Menu.Target>
        <IconBall />
      </Menu.Target>
      <Menu.Target>
        <Avatar color="cyan">N</Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderUserMenu;
