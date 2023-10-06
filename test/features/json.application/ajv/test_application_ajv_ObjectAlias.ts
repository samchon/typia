import typia from "typia"
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectAlias = 
    _test_json_application("ajv")("ObjectAlias")(
        typia.json.application<[ObjectAlias], "ajv">(),
    );