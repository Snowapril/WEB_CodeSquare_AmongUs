/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const LoginInputBlock = styled.form`
  display: flex;
  flex-direction: column;
`;

export interface LoginInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSubmit?: (value: string) => void;
  password?: boolean;
  disabled?: boolean;
  label: string;
  hint?: string | boolean;
  valid?: boolean;
  invalid?: boolean;
}

export const LoginInput: React.FC<LoginInputProps> = ({
  onChange,
  onSubmit,
  value,
  label,
  password = false,
  disabled = false,
  hint,
  valid,
  invalid,
  ...props
}) => {
  let hintColor = "inherit";
  if (valid) {
    hintColor = "#627bff";
  }
  if (invalid) {
    hintColor = "#fa2d2d";
  }
  return (
    <LoginInputBlock
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit(value);
      }}
      {...props}
    >
      <div
        css={css`
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          letter-spacing: -0.02em;
          text-align: left;
          padding-bottom: 6px;
        `}
      >
        {label}
      </div>
      <input
        css={css`
          border: 1px solid #e3e3e3;
          height: 36px;
          border-radius: 4px;
          :disabled {
            color: #959da5;
            background-color: #f3f4f6;
          }
        `}
        type={password ? "password" : "text"}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <div
        css={css`
          padding-top: 12px;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 17px;
          letter-spacing: -0.02em;

          height: 29px;
          color: ${hintColor};
        `}
      >
        {hint}
      </div>
    </LoginInputBlock>
  );
};