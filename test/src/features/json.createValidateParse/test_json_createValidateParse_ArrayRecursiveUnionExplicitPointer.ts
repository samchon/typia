import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_createValidateParse_ArrayRecursiveUnionExplicitPointer = (): void => _test_json_validateParse(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)(typia.json.createValidateParse<ArrayRecursiveUnionExplicitPointer>());
