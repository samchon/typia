import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createValidateClone_ArrayRepeatedNullable =
    _test_validateClone(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        typia.createValidateClone<ArrayRepeatedNullable>(),
        ArrayRepeatedNullable.SPOILERS,
    );
