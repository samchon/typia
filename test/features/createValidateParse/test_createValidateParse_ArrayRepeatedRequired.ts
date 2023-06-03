import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createValidateParse_ArrayRepeatedRequired =
    _test_validateParse(
        "ArrayRepeatedRequired",
        ArrayRepeatedRequired.generate,
        typia.createValidateParse<ArrayRepeatedRequired>(),
        ArrayRepeatedRequired.SPOILERS,
    );
