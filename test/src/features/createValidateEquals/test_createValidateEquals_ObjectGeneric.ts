import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createValidateEquals_ObjectGeneric = (): void => _test_validateEquals(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)(typia.createValidateEquals<ObjectGeneric>());
