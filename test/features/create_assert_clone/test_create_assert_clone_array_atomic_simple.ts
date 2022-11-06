import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_array_atomic_simple =
    _test_assert_clone(
        "atomic array",
        ArrayAtomicSimple.generate,
        TSON.createAssertClone<ArrayAtomicSimple>(),
        ArrayAtomicSimple.SPOILERS,
    );
