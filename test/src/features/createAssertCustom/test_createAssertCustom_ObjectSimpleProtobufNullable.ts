import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectSimpleProtobufNullable =
  _test_assert(CustomGuardError)(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)(
    typia.createAssert<ObjectSimpleProtobufNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
