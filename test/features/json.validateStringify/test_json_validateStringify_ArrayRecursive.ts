import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_validateStringify_ArrayRecursive =
    _test_json_validateStringify<ArrayRecursive>(ArrayRecursive)((input) =>
        typia.json.validateStringify<ArrayRecursive>(input),
    );
