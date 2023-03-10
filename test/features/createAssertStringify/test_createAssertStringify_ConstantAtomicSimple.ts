import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssertStringify_ConstantAtomicSimple =
    _test_assertStringify(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        typia.createAssertStringify<ConstantAtomicSimple>(),
        ConstantAtomicSimple.SPOILERS,
    );
