import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createIs_ObjectInternal = _test_is(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)(typia.createIs<ObjectInternal>());
