import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_validateStringify_ObjectLiteralType = _test_validateStringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.validateStringify(input),
    ObjectLiteralType.SPOILERS,
);
