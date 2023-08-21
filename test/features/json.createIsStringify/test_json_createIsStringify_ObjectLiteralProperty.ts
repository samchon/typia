import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_isStringify_ObjectLiteralProperty =
    _test_json_isStringify("ObjectLiteralProperty")<ObjectLiteralProperty>(
        ObjectLiteralProperty,
    )(typia.json.createIsStringify<ObjectLiteralProperty>());
