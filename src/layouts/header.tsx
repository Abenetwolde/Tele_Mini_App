import { ShoppingCartOutlined, BellOutlined } from "@ant-design/icons"; // Updated to use notification icon
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import useTelegramUser from "@hooks/useTelegramUser";
import { useThemeParams } from "@vkruglikov/react-telegram-web-app";

function AppHeader() {
  const user = useTelegramUser();
  const [colorScheme, themeParams] = useThemeParams();
  return (
    <div className="flex w-full items-center justify-between p-1 bg-[var(--tg-theme-secondary-bg-color)]">
      {/* Left Side: User Information */}
      {user && (
        <div className="flex items-center gap-2">
          {/* Avatar with first letter of first_name if no image */}
          <Avatar
            size="default"
            style={{
              backgroundColor: themeParams.bg_color,
              color: themeParams.text_color 
            }}
          >
            {user.first_name.charAt(0)} {/* First character of first_name */}
          </Avatar>

  
          {/* User Info */}
          <div className="flex flex-col">
            <span
              className="font-bold text-xs"
              style={{ color: themeParams.text_color || "var(--tg-theme-text-color)" }}
            >
              {user.first_name} {user.last_name}
            </span>
            <span className="text-xs" style={{ color: themeParams.hint_color }}>
              @{user.username}
            </span>
          </div>
        </div>
      )}

      {/* Right Side: Cart and Notification Icons */}
      <div className="flex items-center "> {/* Adjusted spacing between icons */}
        {/* Notification Icon */}
        <Link
          className="flex items-center rounded-lg p-3"
          to="/notifications"
        >
          <BellOutlined style={{ fontSize: "15px" }} /> {/* Notification Icon */}
        </Link>

        {/* Cart Icon */}
        <Link
          className="flex items-center gap-2 rounded-lg p-3"
          to="/cart"
        >
          <ShoppingCartOutlined style={{ fontSize: "15px" }} /> {/* Cart Icon */}
        </Link>
      </div>
    </div>
  );
}

export default AppHeader;
