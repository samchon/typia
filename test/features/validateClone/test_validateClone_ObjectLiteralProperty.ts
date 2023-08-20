import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_validateClone_ObjectLiteralProperty = _test_validateClone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.validateClone<ObjectLiteralProperty>(input),
    ObjectLiteralProperty.SPOILERS,
);
