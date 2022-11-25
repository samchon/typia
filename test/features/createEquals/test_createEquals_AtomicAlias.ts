import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_AtomicAlias = _test_equals(
    "AtomicAlias",
    AtomicAlias.generate,
    TSON.createEquals<AtomicAlias>(),
);