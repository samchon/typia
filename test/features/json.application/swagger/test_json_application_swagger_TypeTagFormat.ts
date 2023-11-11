import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_json_application_swagger_TypeTagFormat =
    _test_json_application("swagger")("TypeTagFormat")(
        typia.json.application<[TypeTagFormat], "swagger">(),
    );
