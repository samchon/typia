import typia from "typia"
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArrayRecursiveUnionImplicit = 
    _test_application("ajv")(
        "ArrayRecursiveUnionImplicit",
        typia.application<[ArrayRecursiveUnionImplicit], "ajv">(),
    );