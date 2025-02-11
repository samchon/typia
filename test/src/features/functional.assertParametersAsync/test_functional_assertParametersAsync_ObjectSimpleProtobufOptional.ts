import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectSimpleProtobufOptional = _test_functional_assertParametersAsync(TypeGuardError)(
  "ObjectSimpleProtobufOptional"
)(ObjectSimpleProtobufOptional)(
  (p: (input: ObjectSimpleProtobufOptional) => Promise<ObjectSimpleProtobufOptional>) =>
    typia.functional.assertParameters(p),
)