import typia from "../../../src";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectGenericAlias = _test_validateStringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createValidateStringify<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
