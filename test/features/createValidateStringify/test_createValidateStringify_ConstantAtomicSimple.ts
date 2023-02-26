import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createValidateStringify_ConstantAtomicSimple =
    _test_validateStringify(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        typia.createValidateStringify<ConstantAtomicSimple>(),
        ConstantAtomicSimple.SPOILERS,
    );
