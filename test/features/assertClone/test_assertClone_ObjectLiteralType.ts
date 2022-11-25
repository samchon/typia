import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectLiteralType = _test_assertClone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => TSON.assertClone(input),
    ObjectLiteralType.SPOILERS,
);