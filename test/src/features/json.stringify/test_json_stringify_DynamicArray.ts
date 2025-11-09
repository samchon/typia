import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_stringify_DynamicArray = (): void =>
  _test_json_stringify("DynamicArray")<DynamicArray>(DynamicArray)((input) =>
    typia.json.stringify<DynamicArray>(input),
  );
