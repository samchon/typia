import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_functional_isParametersAsync_ObjectSimpleProtobufOptional =
  _test_functional_isParametersAsync("ObjectSimpleProtobufOptional")(
    ObjectSimpleProtobufOptional,
  )(
    (
      p: (
        input: ObjectSimpleProtobufOptional,
      ) => Promise<ObjectSimpleProtobufOptional>,
    ) => typia.functional.isParameters(p),
  );
