import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectLiteralType = _test_assertPrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.assertPrune(input),
    ObjectLiteralType.SPOILERS,
);
