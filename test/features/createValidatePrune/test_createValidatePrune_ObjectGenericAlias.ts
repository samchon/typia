import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectGenericAlias = _test_validatePrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createValidatePrune<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
