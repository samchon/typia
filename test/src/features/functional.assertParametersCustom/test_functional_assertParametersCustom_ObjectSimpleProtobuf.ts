import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_assertParametersCustom_ObjectSimpleProtobuf =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ObjectSimpleProtobuf")(
      ObjectSimpleProtobuf,
    )((p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
