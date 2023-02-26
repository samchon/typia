import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createIsClone_ObjectLiteralProperty = _test_isClone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createIsClone<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
