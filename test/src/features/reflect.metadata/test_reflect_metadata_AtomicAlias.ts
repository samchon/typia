import typia from "typia";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_AtomicAlias = (): void =>
  _test_reflect_metadata("AtomicAlias")(
    typia.reflect.metadata<[AtomicAlias]>()
  );