import typia from "typia";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectGeneric = _test_validatePrune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createValidatePrune<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
