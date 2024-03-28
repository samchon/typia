import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_functional_assertFunction_ObjectSimpleProtobufOptional =
  _test_functional_assertFunction(TypeGuardError)(
    "ObjectSimpleProtobufOptional",
  )(ObjectSimpleProtobufOptional)(
    (
      p: (input: ObjectSimpleProtobufOptional) => ObjectSimpleProtobufOptional,
    ) => typia.functional.assertFunction(p),
  );
