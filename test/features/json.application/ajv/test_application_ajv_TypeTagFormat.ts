import typia from "typia"
import { TypeTagFormat } from "../../../structures/TypeTagFormat";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_TypeTagFormat = 
    _test_json_application("ajv")("TypeTagFormat")(
        typia.json.application<[TypeTagFormat], "ajv">(),
    );