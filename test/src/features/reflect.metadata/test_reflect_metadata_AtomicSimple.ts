import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_reflect_metadata_AtomicSimple = (): void =>
  _test_reflect_metadata("AtomicSimple")(
    typia.reflect.metadata<[AtomicSimple]>(),
  );
