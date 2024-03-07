import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectSimpleProtobuf =
  _test_functional_assertParameters(TypeGuardError)("ObjectSimpleProtobuf")(
    ObjectSimpleProtobuf,
  )((p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) =>
    typia.functional.assertParameters(p),
  );
