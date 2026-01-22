import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_reflect_metadata_ObjectDate = (): void =>
  _test_reflect_metadata("ObjectDate")(typia.reflect.metadata<[ObjectDate]>());
