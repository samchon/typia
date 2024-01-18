import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_createStringify_AtomicAlias = _test_json_stringify(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input: AtomicAlias): string => {
  // @ts-ignore;
  declare const require: (lib: string) => any;
  const $number = require("typia/lib/functional/$number").$number;
  const $string = require("typia/lib/functional/$string").$string;
  return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
});
