import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_reflect_metadata_ArrayRepeatedOptional =
  _test_reflect_metadata("ArrayRepeatedOptional")(
    typia.reflect.metadata<[ArrayRepeatedOptional]>(),
  );
