import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_stringify_AtomicSimple = _test_json_stringify(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) =>
  ((input: AtomicSimple): string => {
    const $number = (typia.json.stringify as any).number;
    const $string = (typia.json.stringify as any).string;
    return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
  })(input),
);
