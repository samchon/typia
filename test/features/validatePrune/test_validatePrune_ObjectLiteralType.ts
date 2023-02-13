import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectLiteralType = _test_validatePrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.validatePrune(input),
    ObjectLiteralType.SPOILERS,
);