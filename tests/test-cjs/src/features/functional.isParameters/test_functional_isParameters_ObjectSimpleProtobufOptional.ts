import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_functional_isParameters_ObjectSimpleProtobufOptional =
  (): void =>
    _test_functional_isParameters("ObjectSimpleProtobufOptional")(
      ObjectSimpleProtobufOptional,
    )(
      (
        p: (
          input: ObjectSimpleProtobufOptional,
        ) => ObjectSimpleProtobufOptional,
      ) => typia.functional.isParameters(p),
    );
