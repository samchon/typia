import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectLiteralProperty = _test_assertEquals(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createAssertEquals<ObjectLiteralProperty>(),
);