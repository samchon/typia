import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_assert_NativeUnion = _test_assert(
    "NativeUnion",
    NativeUnion.generate,
    typia.createAssert<NativeUnion>(),
    NativeUnion.SPOILERS,
);
