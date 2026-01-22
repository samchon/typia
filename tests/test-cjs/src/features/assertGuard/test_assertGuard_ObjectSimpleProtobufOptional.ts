import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_assertGuard_ObjectSimpleProtobufOptional = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)((input) =>
    typia.assertGuard<ObjectSimpleProtobufOptional>(input),
  );
