import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_reflect_metadata_TypeTagTypeBigInt = (): void =>
  _test_reflect_metadata("TypeTagTypeBigInt")(
    typia.reflect.metadata<[TypeTagTypeBigInt]>(),
  );
