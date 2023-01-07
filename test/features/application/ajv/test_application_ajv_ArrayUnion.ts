import typia from "../../../../src";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArrayUnion = 
    _test_application("ajv")(
        "ArrayUnion",
        typia.application<[ArrayUnion], "ajv">(),
    );