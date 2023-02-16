import typia from "typia"
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TemplateUnion = 
    _test_application("swagger")(
        "TemplateUnion",
        typia.application<[TemplateUnion], "swagger">(),
    );