import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_isParse_DynamicArray = _test_json_isParse<DynamicArray>(
    DynamicArray,
)(typia.json.createIsParse<DynamicArray>());
