import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_validateStringify_ArrayAtomicSimple = _test_validateStringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.validateStringify<ArrayAtomicSimple>(input),
    ArrayAtomicSimple.SPOILERS,
);
