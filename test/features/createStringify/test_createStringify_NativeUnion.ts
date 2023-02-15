import typia from "typia";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_NativeUnion = _test_stringify(
    "NativeUnion",
    NativeUnion.generate,
    typia.createStringify<NativeUnion>(),
);
