import typia from "typia"
import { NativeUnion } from "../../../structures/NativeUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_NativeUnion = 
    _test_json_application("swagger")("NativeUnion")(
        typia.json.application<[NativeUnion], "swagger">(),
    );