import typia from "typia";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagRangeBigInt = 
  _test_reflect_metadata("TypeTagRangeBigInt")(
    typia.reflect.metadata<[TypeTagRangeBigInt]>()
  );