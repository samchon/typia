import typia from "typia"
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_DynamicEnumeration = 
    _test_json_application("swagger")("DynamicEnumeration")(
        typia.json.application<[DynamicEnumeration], "swagger">(),
    );