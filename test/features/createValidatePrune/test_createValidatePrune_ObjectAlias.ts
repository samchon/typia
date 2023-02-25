import typia from "../../../src";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectAlias = _test_validatePrune(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createValidatePrune<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
