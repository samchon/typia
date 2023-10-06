import typia from "typia"
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ArrayAtomicAlias = 
    _test_json_application("swagger")("ArrayAtomicAlias")(
        typia.json.application<[ArrayAtomicAlias], "swagger">(),
    );