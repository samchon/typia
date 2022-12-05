import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ConstantAtomicSimple =
    _test_validateStringify(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        TSON.createValidateStringify<ConstantAtomicSimple>(),
        ConstantAtomicSimple.SPOILERS,
    );
