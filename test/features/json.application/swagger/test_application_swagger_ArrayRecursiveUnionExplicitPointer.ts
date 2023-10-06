import typia from "typia"
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ArrayRecursiveUnionExplicitPointer = 
    _test_json_application("swagger")("ArrayRecursiveUnionExplicitPointer")(
        typia.json.application<[ArrayRecursiveUnionExplicitPointer], "swagger">(),
    );