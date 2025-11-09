import typia from "typia";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagTypeBigInt = (): void =>
  _test_reflect_metadata("TypeTagTypeBigInt")(
    typia.reflect.metadata<[TypeTagTypeBigInt]>()
  );