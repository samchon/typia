import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_assertPrune_ArrayAtomicAlias =
    _test_misc_assertPrune<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
        typia.misc.assertPrune<ArrayAtomicAlias>(input),
    );
