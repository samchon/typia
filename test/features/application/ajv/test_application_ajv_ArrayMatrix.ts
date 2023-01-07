import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArrayMatrix = 
    _test_application("ajv")(
        "ArrayMatrix",
        typia.application<[ArrayMatrix], "ajv">(),
    );