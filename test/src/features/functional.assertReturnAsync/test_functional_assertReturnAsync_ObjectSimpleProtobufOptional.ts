import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectSimpleProtobufOptional =
  _test_functional_assertReturnAsync(TypeGuardError)(
    "ObjectSimpleProtobufOptional",
  )(ObjectSimpleProtobufOptional)(
    (
      p: (
        input: ObjectSimpleProtobufOptional,
      ) => Promise<ObjectSimpleProtobufOptional>,
    ) => typia.functional.assertReturn(p),
  );
