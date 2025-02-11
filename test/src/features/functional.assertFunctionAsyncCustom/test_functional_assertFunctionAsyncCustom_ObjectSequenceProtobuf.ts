import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectSequenceProtobuf = _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectSequenceProtobuf"
)(ObjectSequenceProtobuf)(
  (p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)