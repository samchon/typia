import typia from "typia"
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_ArrayRepeatedNullable = 
    _test_application("ajv")(
        "ArrayRepeatedNullable",
        typia.application<[ArrayRepeatedNullable], "ajv">(),
    );