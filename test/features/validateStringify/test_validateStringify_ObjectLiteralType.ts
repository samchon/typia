import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectLiteralType = _test_validateStringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.validateStringify(input),
    ObjectLiteralType.SPOILERS,
);
