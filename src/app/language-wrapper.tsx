import { LanguageDropdownItem } from "./language-dropdown-item";

interface Props {
  label: string;
  locale: string;
  disabled?: boolean;
}

export async function LanguageWrapper({ label, locale, disabled }: Props) {
  const isCurrentLocale = locale === "en";

  return (
    <LanguageDropdownItem
      label={label}
      locale={locale}
      selected={isCurrentLocale}
      disabled={disabled}
    />
  );
}
