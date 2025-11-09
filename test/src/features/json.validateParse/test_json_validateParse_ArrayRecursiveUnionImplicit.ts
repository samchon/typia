import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_validateParse_ArrayRecursiveUnionImplicit = (): void => _test_json_validateParse(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit
)((input) => typia.json.validateParse<ArrayRecursiveUnionImplicit>(input));
