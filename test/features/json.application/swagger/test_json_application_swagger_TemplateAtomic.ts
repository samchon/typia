import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_json_application_swagger_TemplateAtomic =
    _test_json_application("swagger")("TemplateAtomic")(
        typia.json.application<[TemplateAtomic], "swagger">(),
    );
