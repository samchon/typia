import typia from "typia";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ConstantAtomicWrapper = (): void =>
  _test_reflect_metadata("ConstantAtomicWrapper")(
    typia.reflect.metadata<[ConstantAtomicWrapper]>()
  );