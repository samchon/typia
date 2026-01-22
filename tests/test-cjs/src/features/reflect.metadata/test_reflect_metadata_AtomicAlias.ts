import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_reflect_metadata_AtomicAlias = (): void =>
  _test_reflect_metadata("AtomicAlias")(
    typia.reflect.metadata<[AtomicAlias]>(),
  );
