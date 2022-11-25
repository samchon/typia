import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_AtomicUnion = _test_isStringify(
    "AtomicUnion",
    AtomicUnion.generate,
    TSON.createIsStringify<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
