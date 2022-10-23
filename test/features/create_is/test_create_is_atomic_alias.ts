import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_is } from "./../is/_test_is";

export const test_create_is_atomic_alias = _test_is(
    "generic alias",
    AtomicAlias.generate,
    TSON.createIs<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
