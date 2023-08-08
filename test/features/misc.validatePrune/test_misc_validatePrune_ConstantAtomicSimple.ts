import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_validatePrune_ConstantAtomicSimple =
    _test_misc_validatePrune(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        (input) => typia.misc.validatePrune(input),
        ConstantAtomicSimple.SPOILERS,
    );
