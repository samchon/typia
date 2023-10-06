import typia from "typia"
import { NativeUnion } from "../../../structures/NativeUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_NativeUnion = 
    _test_json_application("ajv")("NativeUnion")(
        typia.json.application<[NativeUnion], "ajv">(),
    );