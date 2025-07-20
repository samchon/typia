import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_assertFunctionCustom_ObjectSequenceProtobuf =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ObjectSequenceProtobuf")(
      ObjectSequenceProtobuf,
    )((p: (input: ObjectSequenceProtobuf) => ObjectSequenceProtobuf) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
