import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_AtomicAlias = _test_isStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => TSON.isStringify(input),
    AtomicAlias.SPOILERS,
);