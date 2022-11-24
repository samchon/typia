import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_atomic_alias = _test_assert_clone(
    "generic alias",
    AtomicAlias.generate,
    TSON.createAssertClone<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
