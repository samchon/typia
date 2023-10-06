import typia from "typia"
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectUnionDouble = 
    _test_json_application("ajv")("ObjectUnionDouble")(
        typia.json.application<[ObjectUnionDouble], "ajv">(),
    );