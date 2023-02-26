import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createValidatePrune_ConstantAtomicSimple =
    _test_validatePrune(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        typia.createValidatePrune<ConstantAtomicSimple>(),
        ConstantAtomicSimple.SPOILERS,
    );
