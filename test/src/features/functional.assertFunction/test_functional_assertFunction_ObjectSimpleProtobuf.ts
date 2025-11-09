import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_ObjectSimpleProtobuf = (): void => _test_functional_assertFunction(TypeGuardError)(
  "ObjectSimpleProtobuf"
)(ObjectSimpleProtobuf)(
  (p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) => typia.functional.assertFunction(p),
)