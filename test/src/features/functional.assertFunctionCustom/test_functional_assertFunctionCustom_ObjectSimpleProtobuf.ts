import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectSimpleProtobuf = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectSimpleProtobuf"
)(ObjectSimpleProtobuf)(
  (p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)