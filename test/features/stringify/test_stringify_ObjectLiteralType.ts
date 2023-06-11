import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_stringify_ObjectLiteralType = _test_stringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.stringify(input),
);
