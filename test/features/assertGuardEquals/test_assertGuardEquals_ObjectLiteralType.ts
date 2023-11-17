import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_assertGuardEquals_ObjectLiteralType = _test_assertGuardEquals(
    "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)((input) =>
    typia.assertGuardEquals<ObjectLiteralType>(input),
);
