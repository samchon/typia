import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectLiteralType = _test_is(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    TSON.createIs<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
