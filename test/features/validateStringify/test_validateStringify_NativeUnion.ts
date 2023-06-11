import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_validateStringify_NativeUnion = _test_validateStringify(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.validateStringify(input),
    NativeUnion.SPOILERS,
);
