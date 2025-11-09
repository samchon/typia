import typia from "typia";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectHttpConstant = (): void =>
  _test_reflect_metadata("ObjectHttpConstant")(
    typia.reflect.metadata<[ObjectHttpConstant]>()
  );