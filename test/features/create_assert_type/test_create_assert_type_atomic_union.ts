import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_atomic_union = _test_assert_type(
    "union atomic",
    AtomicUnion.generate,
    TSON.createAssertType<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
