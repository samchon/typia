import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_reflect_metadata_ObjectPartialAndRequired = (): void =>
  _test_reflect_metadata("ObjectPartialAndRequired")(
    typia.reflect.metadata<[ObjectPartialAndRequired]>(),
  );
