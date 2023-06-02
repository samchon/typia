import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createValidateParse_ArrayRepeatedNullable =
    _test_validateParse(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        typia.createValidateParse<ArrayRepeatedNullable>(),
        ArrayRepeatedNullable.SPOILERS,
    );
