import typia from "typia";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectPartialAndRequired = (): void =>
  _test_reflect_metadata("ObjectPartialAndRequired")(
    typia.reflect.metadata<[ObjectPartialAndRequired]>()
  );