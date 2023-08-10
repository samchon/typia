import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_misc_assertClone_ArraySimplePointer =
    _test_misc_assertClone<ArraySimplePointer>(ArraySimplePointer)((input) =>
        typia.misc.assertClone(input),
    );
