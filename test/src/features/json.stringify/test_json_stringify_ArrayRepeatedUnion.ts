import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_stringify_ArrayRepeatedUnion = (): void =>
  _test_json_stringify("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )((input) => typia.json.stringify<ArrayRepeatedUnion>(input));
