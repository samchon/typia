import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_json_application_ajv_TemplateConstant =
    _test_json_application("ajv")(
        "TemplateConstant",
        typia.json.application<[TemplateConstant], "ajv">(),
    );
