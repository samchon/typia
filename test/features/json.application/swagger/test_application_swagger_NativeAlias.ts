import typia from "typia"
import { NativeAlias } from "../../../structures/NativeAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_NativeAlias = 
    _test_json_application("swagger")("NativeAlias")(
        typia.json.application<[NativeAlias], "swagger">(),
    );