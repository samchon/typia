import typia from "typia";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectAlias = _test_validateStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createValidateStringify<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
