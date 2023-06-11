import typia from "../../../src";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ObjectGenericAlias = _test_validateClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createValidateClone<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
