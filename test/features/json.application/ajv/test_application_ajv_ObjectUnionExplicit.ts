import typia from "typia"
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectUnionExplicit = 
    _test_json_application("ajv")("ObjectUnionExplicit")(
        typia.json.application<[ObjectUnionExplicit], "ajv">(),
    );