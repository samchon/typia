import typia from "typia"
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ArrayRecursiveUnionExplicit = 
    _test_json_application("swagger")("ArrayRecursiveUnionExplicit")(
        typia.json.application<[ArrayRecursiveUnionExplicit], "swagger">(),
    );