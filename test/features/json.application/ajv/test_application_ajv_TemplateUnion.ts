import typia from "typia"
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_TemplateUnion = 
    _test_json_application("ajv")("TemplateUnion")(
        typia.json.application<[TemplateUnion], "ajv">(),
    );