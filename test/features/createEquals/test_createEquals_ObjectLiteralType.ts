import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectLiteralType = _test_equals(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createEquals<ObjectLiteralType>(),
);