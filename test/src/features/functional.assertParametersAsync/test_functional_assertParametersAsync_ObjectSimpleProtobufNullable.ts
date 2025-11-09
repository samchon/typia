import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectSimpleProtobufNullable = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "ObjectSimpleProtobufNullable"
)(ObjectSimpleProtobufNullable)(
  (p: (input: ObjectSimpleProtobufNullable) => Promise<ObjectSimpleProtobufNullable>) =>
    typia.functional.assertParameters(p),
)