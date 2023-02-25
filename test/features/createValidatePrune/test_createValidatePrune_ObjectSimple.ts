import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectSimple = _test_validatePrune(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createValidatePrune<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
