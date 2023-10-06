import typia from "typia"
import { SetUnion } from "../../../structures/SetUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_SetUnion = 
    _test_json_application("swagger")("SetUnion")(
        typia.json.application<[SetUnion], "swagger">(),
    );