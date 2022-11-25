import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_AtomicAlias = _test_assertStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => TSON.assertStringify(input),
    AtomicAlias.SPOILERS,
);