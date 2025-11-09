import typia from "typia";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_AtomicUnion = (): void =>
  _test_reflect_metadata("AtomicUnion")(
    typia.reflect.metadata<[AtomicUnion]>()
  );