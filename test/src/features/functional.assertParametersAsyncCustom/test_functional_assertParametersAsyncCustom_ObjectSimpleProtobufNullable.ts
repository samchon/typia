import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectSimpleProtobufNullable =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ObjectSimpleProtobufNullable",
  )(ObjectSimpleProtobufNullable)(
    (
      p: (
        input: ObjectSimpleProtobufNullable,
      ) => Promise<ObjectSimpleProtobufNullable>,
    ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
