import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_isStringify_ArrayRepeatedRequired =
    _test_json_isStringify(
        "ArrayRepeatedRequired",
        ArrayRepeatedRequired.generate,
        typia.json.createIsStringify<ArrayRepeatedRequired>(),
        ArrayRepeatedRequired.SPOILERS,
    );
