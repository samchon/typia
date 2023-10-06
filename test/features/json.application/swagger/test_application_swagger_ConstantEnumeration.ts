import typia from "typia"
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ConstantEnumeration = 
    _test_json_application("swagger")("ConstantEnumeration")(
        typia.json.application<[ConstantEnumeration], "swagger">(),
    );