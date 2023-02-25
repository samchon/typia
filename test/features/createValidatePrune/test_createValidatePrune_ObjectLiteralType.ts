import typia from "../../../src";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectLiteralType = _test_validatePrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createValidatePrune<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
