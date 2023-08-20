import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_validate_NativeUnion = _test_validate(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.validate<NativeUnion>(input),
    NativeUnion.SPOILERS,
);
