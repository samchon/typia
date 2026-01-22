import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_reflect_metadata_TypeTagArray = (): void =>
  _test_reflect_metadata("TypeTagArray")(
    typia.reflect.metadata<[TypeTagArray]>(),
  );
