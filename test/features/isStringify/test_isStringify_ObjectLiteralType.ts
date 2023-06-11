import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_isStringify_ObjectLiteralType = _test_isStringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.isStringify(input),
    ObjectLiteralType.SPOILERS,
);
