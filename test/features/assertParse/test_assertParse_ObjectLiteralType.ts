import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectLiteralType = _test_assertParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => TSON.assertParse<ObjectLiteralType>(input),
    ObjectLiteralType.SPOILERS,
);
