import typia from "typia";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagArrayUnion = (): void =>
  _test_reflect_metadata("TypeTagArrayUnion")(
    typia.reflect.metadata<[TypeTagArrayUnion]>()
  );