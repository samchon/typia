import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_validateParse_ArrayRepeatedRequired =
    _test_json_validateParse(
        "ArrayRepeatedRequired",
        ArrayRepeatedRequired.generate,
        typia.json.createValidateParse<ArrayRepeatedRequired>(),
        ArrayRepeatedRequired.SPOILERS,
    );
