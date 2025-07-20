import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_validateParameters_ObjectSimpleProtobufNullable =
  (): void =>
    _test_functional_validateParameters("ObjectSimpleProtobufNullable")(
      ObjectSimpleProtobufNullable,
    )(
      (
        p: (
          input: ObjectSimpleProtobufNullable,
        ) => ObjectSimpleProtobufNullable,
      ) => typia.functional.validateParameters(p),
    );
