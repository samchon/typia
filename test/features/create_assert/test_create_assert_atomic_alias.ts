import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_atomic_alias = _test_assert(
    "generic alias",
    AtomicAlias.generate,
    TSON.createAssert<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
