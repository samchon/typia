import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_atomic_alias = _test_stringify(
    "generic alias",
    AtomicAlias.generate,
    TSON.createStringify<AtomicAlias>(),
);
