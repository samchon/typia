import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_standardSchema_createValidate_ObjectGeneric = _test_standardSchema_validate(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)(typia.createValidate<ObjectGeneric>());
