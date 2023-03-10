import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createStringify_ArrayAtomicSimple = _test_stringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createStringify<ArrayAtomicSimple>(),
);
