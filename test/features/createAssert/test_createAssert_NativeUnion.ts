import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_createAssert_NativeUnion = _test_assert(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)(typia.createAssert<NativeUnion>());
