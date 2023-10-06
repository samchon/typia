import typia from "typia"
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ArrayRecursive = 
    _test_json_application("swagger")("ArrayRecursive")(
        typia.json.application<[ArrayRecursive], "swagger">(),
    );