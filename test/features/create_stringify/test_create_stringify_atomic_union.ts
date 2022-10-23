import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_atomic_union = _test_stringify(
    "union atomic",
    AtomicUnion.generate(),
    TSON.createStringify<AtomicUnion>(),
);
