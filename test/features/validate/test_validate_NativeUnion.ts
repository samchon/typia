import typia from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_NativeUnion = _test_validate(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.validate(input),
    NativeUnion.SPOILERS,
);
