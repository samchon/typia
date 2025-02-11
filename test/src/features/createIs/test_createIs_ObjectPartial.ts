import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createIs_ObjectPartial = _test_is(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.createIs<ObjectPartial>());
