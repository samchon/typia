import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ConstantAtomicSimple =
    _test_validateParse(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        TSON.createValidateParse<ConstantAtomicSimple>(),
        ConstantAtomicSimple.SPOILERS,
    );
