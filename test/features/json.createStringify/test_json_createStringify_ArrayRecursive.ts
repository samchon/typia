import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_createStringify_ArrayRecursive = _test_json_stringify(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)(typia.json.createStringify<ArrayRecursive>());
