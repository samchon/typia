import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createAssertEquals_ObjectLiteralProperty = _test_assertEquals(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)(typia.createAssertEquals<ObjectLiteralProperty>());
