import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_is_DynamicNever = _test_is(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)((input) => typia.is<DynamicNever>(input));
