import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_json_application_swagger_TypeTagDefault =
    _test_json_application("swagger")("TypeTagDefault")(
        typia.json.application<[TypeTagDefault], "swagger">(),
    );
