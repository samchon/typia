import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_misc_validateClone_ArraySimplePointer =
    _test_misc_validateClone<ArraySimplePointer>(ArraySimplePointer)((input) =>
        typia.misc.validateClone<ArraySimplePointer>(input),
    );
