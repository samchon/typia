import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_createAssertClone_NativeUnion = _test_assertClone(
    "NativeUnion",
    NativeUnion.generate,
    typia.createAssertClone<NativeUnion>(),
    NativeUnion.SPOILERS,
);
