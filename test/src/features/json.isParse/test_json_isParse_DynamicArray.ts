import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_isParse_DynamicArray = (): void =>
  _test_json_isParse("DynamicArray")<DynamicArray>(DynamicArray)((input) =>
    typia.json.isParse<DynamicArray>(input),
  );
