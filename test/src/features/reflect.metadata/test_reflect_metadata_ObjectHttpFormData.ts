import typia from "typia";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectHttpFormData = (): void =>
  _test_reflect_metadata("ObjectHttpFormData")(
    typia.reflect.metadata<[ObjectHttpFormData]>()
  );