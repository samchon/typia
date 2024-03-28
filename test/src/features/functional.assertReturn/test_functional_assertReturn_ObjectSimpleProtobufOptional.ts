import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_functional_assertReturn_ObjectSimpleProtobufOptional =
  _test_functional_assertReturn(TypeGuardError)("ObjectSimpleProtobufOptional")(
    ObjectSimpleProtobufOptional,
  )(
    (
      p: (input: ObjectSimpleProtobufOptional) => ObjectSimpleProtobufOptional,
    ) => typia.functional.assertReturn(p),
  );
