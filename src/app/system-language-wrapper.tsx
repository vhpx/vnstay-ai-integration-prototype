import { cookies as c } from "next/headers";
import { SystemLanguageDropdownItem } from "./system-language-dropdown-item";

export async function SystemLanguageWrapper() {
  const cookies = c();
  const currentLocale = "en";
  return <SystemLanguageDropdownItem selected={!currentLocale} />;
}
