import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_assertFunctionCustom_ObjectSimpleProtobufNullable =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)(
      "ObjectSimpleProtobufNullable",
    )(ObjectSimpleProtobufNullable)(
      (
        p: (
          input: ObjectSimpleProtobufNullable,
        ) => ObjectSimpleProtobufNullable,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
