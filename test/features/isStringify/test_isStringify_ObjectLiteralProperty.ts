import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_isStringify_ObjectLiteralProperty = _test_isStringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.isStringify(input),
    ObjectLiteralProperty.SPOILERS,
);
