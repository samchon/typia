import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_standardSchema_createValidate_ObjectAlias = _test_standardSchema_validate(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.createValidate<ObjectAlias>());
