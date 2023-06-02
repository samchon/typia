import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertPrune_ObjectLiteralType = _test_assertPrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createAssertPrune<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
