import typia from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_NativeUnion = _test_assertClone(
    "NativeUnion",
    NativeUnion.generate,
    typia.createAssertClone<NativeUnion>(),
    NativeUnion.SPOILERS,
);