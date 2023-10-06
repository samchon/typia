import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_createValidateStringify_ArrayRecursive =
    _test_json_validateStringify("ArrayRecursive")<ArrayRecursive>(
        ArrayRecursive,
    )(typia.json.createValidateStringify<ArrayRecursive>());
