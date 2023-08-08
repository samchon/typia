import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_isClone_ObjectLiteralType = _test_misc_isClone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.misc.createIsClone<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
