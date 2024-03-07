import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ObjectSimpleProtobufOptional =
  _test_functional_assertReturn(TypeGuardError)("ObjectSimpleProtobufOptional")(
    ObjectSimpleProtobufOptional,
  )(
    (
      p: (input: ObjectSimpleProtobufOptional) => ObjectSimpleProtobufOptional,
    ) => typia.functional.assertReturn(p),
  );
