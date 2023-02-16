import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectGenericAlias = _test_validateEquals(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createValidateEquals<ObjectGenericAlias>(),
);
