import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ArrayAtomicSimple = _test_isParse(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    TSON.createIsParse<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
