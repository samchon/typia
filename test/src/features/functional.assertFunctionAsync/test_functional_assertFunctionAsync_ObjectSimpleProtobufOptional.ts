import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectSimpleProtobufOptional =
  _test_functional_assertFunctionAsync(TypeGuardError)(
    "ObjectSimpleProtobufOptional",
  )(ObjectSimpleProtobufOptional)(
    (
      p: (
        input: ObjectSimpleProtobufOptional,
      ) => Promise<ObjectSimpleProtobufOptional>,
    ) => typia.functional.assertFunction(p),
  );
