import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_json_application_swagger_TemplateUnion =
    _test_json_application("swagger")("TemplateUnion")(
        typia.json.application<[TemplateUnion], "swagger">(),
    );
