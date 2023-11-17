import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createAssertGuard_ObjectLiteralProperty = _test_assertGuard(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.createAssertGuard<ObjectLiteralProperty>(),
);
