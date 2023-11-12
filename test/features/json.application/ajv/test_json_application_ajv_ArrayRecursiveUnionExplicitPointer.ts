import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_application_ajv_ArrayRecursiveUnionExplicitPointer =
    _test_json_application("ajv")("ArrayRecursiveUnionExplicitPointer")(
        typia.json.application<[ArrayRecursiveUnionExplicitPointer], "ajv">(),
    );
