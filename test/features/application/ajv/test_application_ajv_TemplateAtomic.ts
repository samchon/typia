import typia from "typia"
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_TemplateAtomic = 
    _test_application("ajv")(
        "TemplateAtomic",
        typia.application<[TemplateAtomic], "ajv">(),
    );