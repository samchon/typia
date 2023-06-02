import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createAssertPrune_ObjectLiteralProperty = _test_assertPrune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createAssertPrune<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
