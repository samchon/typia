import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_AtomicSimple = _test_stringify(
    "AtomicSimple",
    AtomicSimple.generate,
    TSON.createStringify<AtomicSimple>(),
);