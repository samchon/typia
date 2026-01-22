import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_reflect_metadata_TupleUnion = (): void =>
  _test_reflect_metadata("TupleUnion")(typia.reflect.metadata<[TupleUnion]>());
