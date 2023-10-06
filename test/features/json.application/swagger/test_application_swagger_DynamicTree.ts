import typia from "typia"
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_DynamicTree = 
    _test_json_application("swagger")("DynamicTree")(
        typia.json.application<[DynamicTree], "swagger">(),
    );