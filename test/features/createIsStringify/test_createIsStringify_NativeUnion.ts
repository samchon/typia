import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_createIsStringify_NativeUnion = _test_isStringify(
    "NativeUnion",
    NativeUnion.generate,
    typia.createIsStringify<NativeUnion>(),
    NativeUnion.SPOILERS,
);
