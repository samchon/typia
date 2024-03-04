import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_assertFunction_ObjectSimpleProtobuf =
  _test_functional_assertFunction(TypeGuardError)("ObjectSimpleProtobuf")(
    ObjectSimpleProtobuf,
  )((p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) =>
    typia.functional.assertFunction(p),
  );
