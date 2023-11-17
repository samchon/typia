import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_assertParse_DynamicArray = _test_json_assertParse(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input) =>
  typia.json.assertParse<DynamicArray>(input),
);
