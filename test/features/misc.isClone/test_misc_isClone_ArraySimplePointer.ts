import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_misc_isClone_ArraySimplePointer =
    _test_misc_isClone<ArraySimplePointer>(ArraySimplePointer)((input) =>
        typia.misc.isClone<ArraySimplePointer>(input),
    );
