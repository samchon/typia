import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_NativeUnion = _test_validate(
    "NativeUnion",
    NativeUnion.generate,
    TSON.createValidate<NativeUnion>(),
    NativeUnion.SPOILERS,
);
