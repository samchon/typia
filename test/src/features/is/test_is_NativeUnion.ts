import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_is_NativeUnion = (): void => _test_is(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)((input) => typia.is<NativeUnion>(input));
