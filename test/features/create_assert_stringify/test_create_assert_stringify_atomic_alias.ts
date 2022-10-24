import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_atomic_alias = _test_assert_stringify(
    "generic alias",
    AtomicAlias.generate,
    TSON.createAssertStringify<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
