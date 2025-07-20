import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_assertParameters_ObjectSequenceProtobuf =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)("ObjectSequenceProtobuf")(
      ObjectSequenceProtobuf,
    )((p: (input: ObjectSequenceProtobuf) => ObjectSequenceProtobuf) =>
      typia.functional.assertParameters(p),
    );
