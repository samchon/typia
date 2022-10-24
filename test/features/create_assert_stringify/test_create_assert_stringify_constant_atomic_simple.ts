import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_constant_atomic =
    _test_assert_stringify(
        "constant atomic",
        ConstantAtomicSimple.generate,
        TSON.createAssertStringify<ConstantAtomicSimple>(),
        ConstantAtomicSimple.SPOILERS,
    );
