import { createGlobalStyle} from "styled-components";
import { CalculatorTheme } from "../utils/CalculatorTypes";

export const GlobalStyles = createGlobalStyle<{theme: CalculatorTheme}>`
  body {
    background: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.body.text};
    font-family: ${({ theme }) => theme.font}, sans-serif;
  }

  .key {
      font-family: ${({ theme }) => theme.font}, sans-serif;
  }

  .key-color-1 {
    background-color: ${({ theme }) => theme.colors.buttons.delReset.background};
    box-shadow: inset 0px -4px 0px 0px ${({ theme }) => theme.colors.buttons.delReset.shadow};
    color: ${({ theme }) => theme.colors.buttons.delReset.text};
  }
  
  .key-color-2 {
    background-color: ${({ theme }) => theme.colors.buttons.equals.background};
    box-shadow: inset 0px -4px 0px 0px ${({ theme }) => theme.colors.buttons.equals.shadow};
    color: ${({ theme }) => theme.colors.buttons.equals.text};
  }
  
  .key-color-3 {
    background-color: ${({ theme }) => theme.colors.buttons.numericOp.background};
    box-shadow: inset 0px -4px 0px 0px ${({ theme }) => theme.colors.buttons.numericOp.shadow};
    color: ${({ theme }) => theme.colors.buttons.numericOp.text};
  }
  
  .key-color-1:hover, .key-color-1:active {
    background-color: ${({ theme }) => theme.colors.buttons.delReset.active.background};
  }
  
  .key-color-2:hover, .key-color-2:active {
    background-color: ${({ theme }) => theme.colors.buttons.equals.active.background};
  }
  
  .key-color-3:hover, .key-color-3:active {
    background-color: ${({ theme }) => theme.colors.buttons.numericOp.active.background};
  }

  .key-color-1:active, .key-color-2:active, .key-color-3:active {
    transform: scale(0.98);
  }

  .keypad-container {
    background-color: ${({ theme }) => theme.colors.keypad.background};
  }

  .screen-container {
    background-color: ${({ theme }) => theme.colors.screen.background};
    color: ${({ theme }) => theme.colors.screen.text};
  }

  .radio-theme:checked {
    background-color: ${({ theme }) => theme.colors.toggle.background};
  }

  .switch-indicator {
      background-color: ${({ theme }) => theme.colors.toggle.indicator};
  }

  .switch-indicator:hover {
    background-color: ${({ theme }) => theme.colors.toggle.active.indicator};
}

  .buttons {
      background-color: ${({ theme }) => theme.colors.toggle.background};
  }
`;