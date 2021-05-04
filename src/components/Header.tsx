import { HeaderProps } from "./types";

export function Header({ title }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {title}</span>
      </span>
    </header>
  );
}
