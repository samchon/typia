import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_assertClone_ArrayRepeatedNullable =
    _test_misc_assertClone(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        typia.misc.createAssertClone<ArrayRepeatedNullable>(),
        ArrayRepeatedNullable.SPOILERS,
    );
