import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_validateStringify_ArrayMatrix = _test_validateStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.validateStringify<ArrayMatrix>(input),
    ArrayMatrix.SPOILERS,
);
