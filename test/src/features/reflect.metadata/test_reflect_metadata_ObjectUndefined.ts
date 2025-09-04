import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_reflect_metadata_ObjectUndefined = (): void =>
  _test_reflect_metadata("ObjectUndefined")(
    typia.reflect.metadata<[ObjectUndefined]>(),
  );
