import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createValidate_ObjectGeneric = (): void => _test_validate(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)(typia.createValidate<ObjectGeneric>());
