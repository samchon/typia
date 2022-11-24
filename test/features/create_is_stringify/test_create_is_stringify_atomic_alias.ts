import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_atomic_alias = _test_is_stringify(
    "generic alias",
    AtomicAlias.generate,
    TSON.createIsStringify<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
