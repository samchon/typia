import typia from "typia"
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectLiteralProperty = 
    _test_json_application("ajv")("ObjectLiteralProperty")(
        typia.json.application<[ObjectLiteralProperty], "ajv">(),
    );