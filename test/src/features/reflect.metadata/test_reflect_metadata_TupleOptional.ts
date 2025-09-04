import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_reflect_metadata_TupleOptional = (): void =>
  _test_reflect_metadata("TupleOptional")(
    typia.reflect.metadata<[TupleOptional]>(),
  );
