import React from "react";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  collapsed?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, collapsed }) => {
  return (
    <button
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/10 transition-colors focus:outline-none"
      tabIndex={0}
      aria-label={label}
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span className="font-medium text-base">{label}</span>}
    </button>
  );
};

export default MenuItem;
