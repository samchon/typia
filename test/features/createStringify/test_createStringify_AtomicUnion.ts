import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_AtomicUnion = _test_stringify(
    "AtomicUnion",
    AtomicUnion.generate,
    TSON.createStringify<AtomicUnion>(),
);
