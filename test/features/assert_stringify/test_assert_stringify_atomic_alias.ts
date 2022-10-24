import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_atomic_alias = _test_assert_stringify(
    "generic alias",
    AtomicAlias.generate,
    (input) => TSON.assertStringify(input),
    AtomicAlias.SPOILERS,
);
