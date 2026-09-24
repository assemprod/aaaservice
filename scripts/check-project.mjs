import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const sections = ["", "about/", "services/", "cases/", "contacts/"];
const required = [
  "app/layout.tsx",
  "app/globals.css",
  "app/reference.css",
  "components/site.tsx",
  "lib/utils.ts",
  "vite.config.ts",
  "wrangler.jsonc",
  "vendor/shadcn-tailwind-4.13.0.css",
  "public/favicon.svg",
  ...["about", "services", "cases"].map((name) => `public/images/${name}-reference.png`),
  ...["", "kz/"].flatMap((locale) => sections.map((section) => `app/${locale}${section}page.tsx`)),
];
const missing = required.filter((name) => !existsSync(new URL(name, root)));
if (missing.length) {
  console.error("\nAAA SERVICE: проект загружен не полностью. Отсутствуют файлы:");
  for (const name of missing) console.error(`  - ${name}`);
  console.error(`\nЗагрузите содержимое архива целиком в корень репозитория (${fileURLToPath(root)}).`);
  process.exit(1);
}
console.log("AAA SERVICE: все 10 страниц и необходимые ресурсы найдены.");
