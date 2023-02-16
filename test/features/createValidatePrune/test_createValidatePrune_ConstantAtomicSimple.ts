import typia from "typia";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ConstantAtomicSimple =
    _test_validatePrune(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        typia.createValidatePrune<ConstantAtomicSimple>(),
        ConstantAtomicSimple.SPOILERS,
    );
