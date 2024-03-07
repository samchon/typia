import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectSimpleProtobufNullable =
  _test_functional_assertReturn(CustomGuardError)(
    "ObjectSimpleProtobufNullable",
  )(ObjectSimpleProtobufNullable)(
    (
      p: (input: ObjectSimpleProtobufNullable) => ObjectSimpleProtobufNullable,
    ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
