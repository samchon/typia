import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_array_atomic_simple = _test_stringify(
    "atomic array",
    ArrayAtomicSimple.generate,
    TSON.createStringify<ArrayAtomicSimple>(),
);
