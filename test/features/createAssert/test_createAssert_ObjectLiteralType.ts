import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectLiteralType = _test_assert(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    TSON.createAssert<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);