import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_validateEquals_ObjectLiteralType = _test_validateEquals(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.validateEquals<ObjectLiteralType>(input),
);
