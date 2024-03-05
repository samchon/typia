import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_assertReturnCustom_ObjectSimpleProtobuf =
  _test_functional_assertReturn(CustomGuardError)("ObjectSimpleProtobuf")(
    ObjectSimpleProtobuf,
  )((p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
