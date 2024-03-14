import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicClass } from "../../../structures/AtomicClass";
export const test_json_stringify_AtomicClass = _test_json_stringify(
  "AtomicClass",
)<AtomicClass>(AtomicClass)((input) =>
  ((input: AtomicClass): string => {
    const $number = (typia.json.stringify as any).number;
    const $string = (typia.json.stringify as any).string;
    return `[${input[0]},${input[1]},${input[2]},${$number(input[3])},${$number(input[4])},${$number(input[5])},${$string(input[6])},${$string(input[7])},${$string(input[8])}]`;
  })(input),
);
