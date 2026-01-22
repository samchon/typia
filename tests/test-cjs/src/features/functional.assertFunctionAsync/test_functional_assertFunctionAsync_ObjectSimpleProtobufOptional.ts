import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_functional_assertFunctionAsync_ObjectSimpleProtobufOptional =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ObjectSimpleProtobufOptional",
    )(ObjectSimpleProtobufOptional)(
      (
        p: (
          input: ObjectSimpleProtobufOptional,
        ) => Promise<ObjectSimpleProtobufOptional>,
      ) => typia.functional.assertFunction(p),
    );
