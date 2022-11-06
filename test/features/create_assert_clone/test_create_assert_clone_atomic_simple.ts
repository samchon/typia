import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_atomic = _test_assert_clone(
    "atomic",
    AtomicSimple.generate,
    TSON.createAssertClone<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
