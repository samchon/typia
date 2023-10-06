import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_createStringify_ObjectLiteralProperty = _test_json_stringify(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)(typia.json.createStringify<ObjectLiteralProperty>());
