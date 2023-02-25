import typia from "typia";

import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TemplateUnion = _test_application("ajv")(
    "TemplateUnion",
    typia.application<[TemplateUnion], "ajv">(),
);
