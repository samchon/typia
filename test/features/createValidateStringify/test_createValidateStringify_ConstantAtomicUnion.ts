import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createValidateStringify_ConstantAtomicUnion =
    _test_validateStringify(
        "ConstantAtomicUnion",
        ConstantAtomicUnion.generate,
        typia.createValidateStringify<ConstantAtomicUnion>(),
        ConstantAtomicUnion.SPOILERS,
    );
