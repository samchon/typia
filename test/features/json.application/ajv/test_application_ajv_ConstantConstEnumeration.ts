import typia from "typia"
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ConstantConstEnumeration = 
    _test_json_application("ajv")("ConstantConstEnumeration")(
        typia.json.application<[ConstantConstEnumeration], "ajv">(),
    );