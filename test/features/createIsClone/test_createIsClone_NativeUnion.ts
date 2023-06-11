import typia from "../../../src";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_createIsClone_NativeUnion = _test_isClone(
    "NativeUnion",
    NativeUnion.generate,
    typia.createIsClone<NativeUnion>(),
    NativeUnion.SPOILERS,
);
