import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_misc_isPrune_ArraySimplePointer =
    _test_misc_isPrune<ArraySimplePointer>(ArraySimplePointer)((input) =>
        typia.misc.isPrune<ArraySimplePointer>(input),
    );
