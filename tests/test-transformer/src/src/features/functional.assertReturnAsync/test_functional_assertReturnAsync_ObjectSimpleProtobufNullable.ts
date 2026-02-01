import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectSimpleProtobufNullable = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ObjectSimpleProtobufNullable"
)(ObjectSimpleProtobufNullable)(
  (p: (input: ObjectSimpleProtobufNullable) => Promise<ObjectSimpleProtobufNullable>) =>
    typia.functional.assertReturn(p),
)