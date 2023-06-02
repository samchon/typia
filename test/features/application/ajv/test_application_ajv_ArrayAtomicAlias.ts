import typia from "typia"
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_ArrayAtomicAlias = 
    _test_application("ajv")(
        "ArrayAtomicAlias",
        typia.application<[ArrayAtomicAlias], "ajv">(),
    );