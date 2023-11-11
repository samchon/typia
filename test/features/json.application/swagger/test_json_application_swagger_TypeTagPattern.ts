import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_json_application_swagger_TypeTagPattern =
    _test_json_application("swagger")("TypeTagPattern")(
        typia.json.application<[TypeTagPattern], "swagger">(),
    );
