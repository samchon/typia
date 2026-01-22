import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_reflect_metadata_TypeTagRangeBigInt = (): void =>
  _test_reflect_metadata("TypeTagRangeBigInt")(
    typia.reflect.metadata<[TypeTagRangeBigInt]>(),
  );
