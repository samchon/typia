import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_createClone_ObjectAlias = (): void => _test_misc_clone(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.misc.createClone<ObjectAlias>());
