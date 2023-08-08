import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_assertPrune_ConstantAtomicSimple =
    _test_misc_assertPrune(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        (input) => typia.misc.assertPrune(input),
        ConstantAtomicSimple.SPOILERS,
    );
