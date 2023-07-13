import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_is_ObjectLiteralType = _test_is(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createIs<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
