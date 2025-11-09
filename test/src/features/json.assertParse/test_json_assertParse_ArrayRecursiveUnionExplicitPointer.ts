import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ArrayRecursiveUnionExplicitPointer = (): void => _test_json_assertParse(TypeGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)((input) => typia.json.assertParse<ArrayRecursiveUnionExplicitPointer>(input));
