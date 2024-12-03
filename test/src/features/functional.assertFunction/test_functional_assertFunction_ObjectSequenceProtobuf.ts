import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_assertFunction_ObjectSequenceProtobuf =
  _test_functional_assertFunction(TypeGuardError)("ObjectSequenceProtobuf")(
    ObjectSequenceProtobuf,
  )((p: (input: ObjectSequenceProtobuf) => ObjectSequenceProtobuf) =>
    typia.functional.assertFunction(p),
  );
