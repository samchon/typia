import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_isParametersAsync_ArraySimpleProtobufOptional =
  _test_functional_isParametersAsync("ArraySimpleProtobufOptional")(
    ArraySimpleProtobufOptional,
  )(
    (
      p: (
        input: ArraySimpleProtobufOptional,
      ) => Promise<ArraySimpleProtobufOptional>,
    ) => typia.functional.isParameters(p),
  );
