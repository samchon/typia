import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_functional_validateReturn_ObjectSimpleProtobufOptional =
  (): void =>
    _test_functional_validateReturn("ObjectSimpleProtobufOptional")(
      ObjectSimpleProtobufOptional,
    )(
      (
        p: (
          input: ObjectSimpleProtobufOptional,
        ) => ObjectSimpleProtobufOptional,
      ) => typia.functional.validateReturn(p),
    );
