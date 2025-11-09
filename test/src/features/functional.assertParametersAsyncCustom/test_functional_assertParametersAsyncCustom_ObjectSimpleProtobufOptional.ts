import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectSimpleProtobufOptional = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ObjectSimpleProtobufOptional"
)(ObjectSimpleProtobufOptional)(
  (p: (input: ObjectSimpleProtobufOptional) => Promise<ObjectSimpleProtobufOptional>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)