import typia from "typia"
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_TypeTagArrayUnion = 
    _test_json_application("swagger")("TypeTagArrayUnion")(
        typia.json.application<[TypeTagArrayUnion], "swagger">(),
    );