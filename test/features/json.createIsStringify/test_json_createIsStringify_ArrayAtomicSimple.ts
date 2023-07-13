import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_isStringify_ArrayAtomicSimple = _test_json_isStringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.json.createIsStringify<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
