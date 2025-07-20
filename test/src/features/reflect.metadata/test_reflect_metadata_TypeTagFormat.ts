import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_reflect_metadata_TypeTagFormat = (): void =>
  _test_reflect_metadata("TypeTagFormat")(
    typia.reflect.metadata<[TypeTagFormat]>(),
  );
