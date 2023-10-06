import typia from "typia"
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ArrayRepeatedUnion = 
    _test_json_application("swagger")("ArrayRepeatedUnion")(
        typia.json.application<[ArrayRepeatedUnion], "swagger">(),
    );