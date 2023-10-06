import typia from "typia"
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectUnionImplicit = 
    _test_json_application("ajv")("ObjectUnionImplicit")(
        typia.json.application<[ObjectUnionImplicit], "ajv">(),
    );