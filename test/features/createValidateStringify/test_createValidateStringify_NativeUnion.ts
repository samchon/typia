import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_NativeUnion = _test_validateStringify(
    "NativeUnion",
    NativeUnion.generate,
    TSON.createValidateStringify<NativeUnion>(),
    NativeUnion.SPOILERS,
);
