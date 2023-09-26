import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_createStringify_DynamicArray = _test_json_stringify(
    "DynamicArray",
)<DynamicArray>(DynamicArray)(typia.json.createStringify<DynamicArray>());
