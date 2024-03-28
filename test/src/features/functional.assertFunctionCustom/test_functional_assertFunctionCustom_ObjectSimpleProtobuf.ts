import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_assertFunctionCustom_ObjectSimpleProtobuf =
  _test_functional_assertFunction(CustomGuardError)("ObjectSimpleProtobuf")(
    ObjectSimpleProtobuf,
  )((p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
