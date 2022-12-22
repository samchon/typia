import typia from "../../../../src";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TemplateConstant = _test_application("ajv")(
    "TemplateConstant",
    typia.application<[TemplateConstant], "ajv">(),
);
