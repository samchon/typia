import typia from "typia";

import { decorate } from "./helper";

interface Payload {
  flag: boolean;
  value: string;
}

const argv = process.argv.slice(2);
const good: Payload = {
  flag: true,
  value: decorate(argv[0] ?? "missing"),
};
const bad: unknown = {
  flag: true,
  value: 3,
};

console.log(
  JSON.stringify({
    argv,
    bad: typia.is<Payload>(bad),
    decorated: decorate("x"),
    ok: typia.is<Payload>(good),
  }),
);
