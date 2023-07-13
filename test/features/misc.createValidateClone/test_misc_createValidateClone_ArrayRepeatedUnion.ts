import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_misc_validateClone_ArrayRepeatedUnion =
    _test_misc_validateClone(
        "ArrayRepeatedUnion",
        ArrayRepeatedUnion.generate,
        typia.misc.createValidateClone<ArrayRepeatedUnion>(),
        ArrayRepeatedUnion.SPOILERS,
    );
