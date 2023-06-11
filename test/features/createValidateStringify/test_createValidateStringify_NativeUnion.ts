import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_createValidateStringify_NativeUnion = _test_validateStringify(
    "NativeUnion",
    NativeUnion.generate,
    typia.createValidateStringify<NativeUnion>(),
    NativeUnion.SPOILERS,
);
