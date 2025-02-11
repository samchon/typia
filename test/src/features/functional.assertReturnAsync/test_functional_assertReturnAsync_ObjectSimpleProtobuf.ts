import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectSimpleProtobuf = _test_functional_assertReturnAsync(TypeGuardError)(
  "ObjectSimpleProtobuf"
)(ObjectSimpleProtobuf)(
  (p: (input: ObjectSimpleProtobuf) => Promise<ObjectSimpleProtobuf>) =>
    typia.functional.assertReturn(p),
)