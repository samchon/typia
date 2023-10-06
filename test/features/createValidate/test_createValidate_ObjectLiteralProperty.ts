import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createValidate_ObjectLiteralProperty = _test_validate(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)(typia.createValidate<ObjectLiteralProperty>());
