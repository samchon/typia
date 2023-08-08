import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_assertClone_ArrayRecursiveUnionExplicit =
    _test_misc_assertClone(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input) => typia.misc.assertClone(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
