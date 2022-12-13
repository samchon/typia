import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectLiteralType = _test_is(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.is(input),
    ObjectLiteralType.SPOILERS,
);
