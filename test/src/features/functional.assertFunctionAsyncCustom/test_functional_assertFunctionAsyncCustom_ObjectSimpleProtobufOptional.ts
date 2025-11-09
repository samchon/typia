import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectSimpleProtobufOptional = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectSimpleProtobufOptional"
)(ObjectSimpleProtobufOptional)(
  (p: (input: ObjectSimpleProtobufOptional) => Promise<ObjectSimpleProtobufOptional>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)