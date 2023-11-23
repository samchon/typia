import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_createStringify_AtomicIntersection =
  _test_json_stringify("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )((input: AtomicIntersection): string => {
    const $number = (typia.json.createStringify as any).number;
    const $string = (typia.json.createStringify as any).string;
    return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
  });
