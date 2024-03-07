import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_functional_validateParametersAsync_ObjectSimpleProtobufOptional =
  _test_functional_validateParametersAsync("ObjectSimpleProtobufOptional")(
    ObjectSimpleProtobufOptional,
  )(
    (
      p: (
        input: ObjectSimpleProtobufOptional,
      ) => Promise<ObjectSimpleProtobufOptional>,
    ) => typia.functional.validateParameters(p),
  );
