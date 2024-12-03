import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_assertReturnCustom_ObjectSequenceProtobuf =
  _test_functional_assertReturn(CustomGuardError)("ObjectSequenceProtobuf")(
    ObjectSequenceProtobuf,
  )((p: (input: ObjectSequenceProtobuf) => ObjectSequenceProtobuf) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
