import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createIs_ToJsonUnion = (): void => _test_is(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.createIs<ToJsonUnion>());
