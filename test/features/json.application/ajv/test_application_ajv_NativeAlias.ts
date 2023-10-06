import typia from "typia"
import { NativeAlias } from "../../../structures/NativeAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_NativeAlias = 
    _test_json_application("ajv")("NativeAlias")(
        typia.json.application<[NativeAlias], "ajv">(),
    );