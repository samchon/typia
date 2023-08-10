import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_misc_assertPrune_ArraySimplePointer =
    _test_misc_assertPrune<ArraySimplePointer>(ArraySimplePointer)(
        typia.misc.createAssertPrune<ArraySimplePointer>(),
    );
