import typia from "typia";

export const check = (input: unknown): boolean => typia.is<string>(input);

if (require.main === module) {
  process.stdout.write(
    JSON.stringify({
      argv: process.argv.slice(2),
      bad: check(1),
      ok: check("ok"),
    }),
  );
}
