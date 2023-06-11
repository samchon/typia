import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createIsParse_ObjectLiteralProperty = _test_isParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createIsParse<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
