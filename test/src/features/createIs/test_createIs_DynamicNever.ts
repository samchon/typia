import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createIs_DynamicNever = _test_is(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)(typia.createIs<DynamicNever>());
