import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_assertReturnCustom_ObjectSimpleProtobufNullable =
  _test_functional_assertReturn(CustomGuardError)(
    "ObjectSimpleProtobufNullable",
  )(ObjectSimpleProtobufNullable)(
    (
      p: (input: ObjectSimpleProtobufNullable) => ObjectSimpleProtobufNullable,
    ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
