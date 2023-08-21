import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_validateParse_ArrayRecursiveUnionImplicit =
    _test_json_validateParse(
        "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
        typia.json.createValidateParse<ArrayRecursiveUnionImplicit>(),
    );
