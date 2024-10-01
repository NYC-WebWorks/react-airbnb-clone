"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "react-feather";
import styled from "styled-components";

type ThemeToggleProps = {
  text?: boolean;
  icon?: boolean;
  className?: string;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ text, icon, className }) => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));
  }, []);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      window.localStorage.setItem("airbnbTheme", "dark");
    } else {
      document.body.classList.remove("dark");
      window.localStorage.setItem("airbnbTheme", "light");
    }
  }, [isDark]);

  return (
    <Container
      className={`${className} themeToggle`}
      onClick={() => setIsDark(!isDark)}
    >
      {icon && (
        <>{isDark ? <Sun className="sun" /> : <Moon className="moon" />}</>
      )}
      {text && "Switch Theme"}
    </Container>
  );
};

export default ThemeToggle;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: fit-content;
  cursor: pointer;
`;
