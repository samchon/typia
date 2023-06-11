import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createAssertStringify_ConstantAtomicUnion =
    _test_assertStringify(
        "ConstantAtomicUnion",
        ConstantAtomicUnion.generate,
        typia.createAssertStringify<ConstantAtomicUnion>(),
        ConstantAtomicUnion.SPOILERS,
    );
