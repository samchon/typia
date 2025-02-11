import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_assertParametersAsyncCustom_ObjectSimpleProtobuf =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ObjectSimpleProtobuf",
  )(ObjectSimpleProtobuf)(
    (p: (input: ObjectSimpleProtobuf) => Promise<ObjectSimpleProtobuf>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
