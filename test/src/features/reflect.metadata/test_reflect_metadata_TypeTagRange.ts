import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_reflect_metadata_TypeTagRange = (): void =>
  _test_reflect_metadata("TypeTagRange")(
    typia.reflect.metadata<[TypeTagRange]>(),
  );
