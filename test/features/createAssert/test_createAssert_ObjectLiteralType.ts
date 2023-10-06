import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssert_ObjectLiteralType = _test_assert(
    "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(
    typia.createAssert<ObjectLiteralType>(),
);
