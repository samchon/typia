import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createIs_ObjectAlias = _test_is(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.createIs<ObjectAlias>());
