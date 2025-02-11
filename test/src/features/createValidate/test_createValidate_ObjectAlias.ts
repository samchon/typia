import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createValidate_ObjectAlias = _test_validate(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.createValidate<ObjectAlias>());
