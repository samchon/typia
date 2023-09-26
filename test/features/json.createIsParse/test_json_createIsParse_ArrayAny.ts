import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_createIsParse_ArrayAny = _test_json_isParse(
    "ArrayAny",
)<ArrayAny>(ArrayAny)(typia.json.createIsParse<ArrayAny>());
