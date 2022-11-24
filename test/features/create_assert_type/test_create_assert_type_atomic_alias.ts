import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_atomic_alias = _test_assert_type(
    "generic alias",
    AtomicAlias.generate,
    TSON.createAssertType<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
