import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_validateStringify_NativeSimple = _test_validateStringify(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.validateStringify(input),
    NativeSimple.SPOILERS,
);
