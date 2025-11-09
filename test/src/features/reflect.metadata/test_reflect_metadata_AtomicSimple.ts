import typia from "typia";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_AtomicSimple = (): void =>
  _test_reflect_metadata("AtomicSimple")(
    typia.reflect.metadata<[AtomicSimple]>()
  );