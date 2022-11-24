import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_constant_atomic_union =
    _test_assert_stringify(
        "constant atomic",
        ConstantAtomicUnion.generate,
        TSON.createAssertStringify<ConstantAtomicUnion>(),
        ConstantAtomicUnion.SPOILERS,
    );
