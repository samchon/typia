import typia from "typia"
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ArrayRecursiveUnionImplicit = 
    _test_json_application("ajv")("ArrayRecursiveUnionImplicit")(
        typia.json.application<[ArrayRecursiveUnionImplicit], "ajv">(),
    );