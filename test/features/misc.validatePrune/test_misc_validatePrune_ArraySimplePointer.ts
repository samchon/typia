import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_misc_validatePrune_ArraySimplePointer =
    _test_misc_validatePrune<ArraySimplePointer>(ArraySimplePointer)((input) =>
        typia.misc.validatePrune<ArraySimplePointer>(input),
    );
