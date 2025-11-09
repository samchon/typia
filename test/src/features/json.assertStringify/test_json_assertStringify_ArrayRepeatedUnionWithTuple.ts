import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ArrayRepeatedUnionWithTuple = (): void => _test_json_assertStringify(TypeGuardError)(
    "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(
    ArrayRepeatedUnionWithTuple
)((input) => typia.json.assertStringify<ArrayRepeatedUnionWithTuple>(input));
