import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createIs_ObjectLiteralProperty = _test_is(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createIs<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
