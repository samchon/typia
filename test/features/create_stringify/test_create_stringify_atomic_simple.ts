import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_atomic = _test_stringify(
    "atomic",
    AtomicSimple.generate(),
    TSON.createStringify<AtomicSimple>(),
);
