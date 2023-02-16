import typia from "typia";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_NativeUnion = _test_is(
    "NativeUnion",
    NativeUnion.generate,
    typia.createIs<NativeUnion>(),
    NativeUnion.SPOILERS,
);
