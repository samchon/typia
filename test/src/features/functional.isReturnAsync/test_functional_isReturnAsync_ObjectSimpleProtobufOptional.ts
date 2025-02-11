import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_functional_isReturnAsync_ObjectSimpleProtobufOptional =
  _test_functional_isReturnAsync("ObjectSimpleProtobufOptional")(
    ObjectSimpleProtobufOptional,
  )(
    (
      p: (
        input: ObjectSimpleProtobufOptional,
      ) => Promise<ObjectSimpleProtobufOptional>,
    ) => typia.functional.isReturn(p),
  );
