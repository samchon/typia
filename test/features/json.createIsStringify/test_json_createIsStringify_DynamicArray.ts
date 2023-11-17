import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_createIsStringify_DynamicArray = _test_json_isStringify(
  "DynamicArray",
)<DynamicArray>(DynamicArray)(typia.json.createIsStringify<DynamicArray>());
