import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectSimpleProtobufNullable = _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectSimpleProtobufNullable"
)(ObjectSimpleProtobufNullable)(
  (p: (input: ObjectSimpleProtobufNullable) => Promise<ObjectSimpleProtobufNullable>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)