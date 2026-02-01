import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createIs_ObjectUndefined = (): void => _test_is(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)(typia.createIs<ObjectUndefined>());
