import typia from "typia"
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ArrayRecursiveUnionImplicit = 
    _test_json_application("swagger")("ArrayRecursiveUnionImplicit")(
        typia.json.application<[ArrayRecursiveUnionImplicit], "swagger">(),
    );