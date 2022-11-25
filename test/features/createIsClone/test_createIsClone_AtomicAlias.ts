import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_AtomicAlias = _test_isClone(
    "AtomicAlias",
    AtomicAlias.generate,
    TSON.createIsClone<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);