import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_assertReturn_ObjectSequenceProtobuf = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectSequenceProtobuf")(
    ObjectSequenceProtobuf,
  )((p: (input: ObjectSequenceProtobuf) => ObjectSequenceProtobuf) =>
    typia.functional.assertReturn(p),
  );
