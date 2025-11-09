import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ObjectSequenceProtobuf = (): void => _test_functional_assertReturn(TypeGuardError)(
  "ObjectSequenceProtobuf"
)(ObjectSequenceProtobuf)(
  (p: (input: ObjectSequenceProtobuf) => ObjectSequenceProtobuf) => typia.functional.assertReturn(p),
)