import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createIs_ArrayUnion = (): void => _test_is(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.createIs<ArrayUnion>());
