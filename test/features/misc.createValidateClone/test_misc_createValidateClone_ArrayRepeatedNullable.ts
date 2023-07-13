import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_validateClone_ArrayRepeatedNullable =
    _test_misc_validateClone(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        typia.misc.createValidateClone<ArrayRepeatedNullable>(),
        ArrayRepeatedNullable.SPOILERS,
    );
