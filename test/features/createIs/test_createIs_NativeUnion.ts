import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_createIs_NativeUnion = _test_is(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)(typia.createIs<NativeUnion>());
