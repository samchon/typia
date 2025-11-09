import typia from "typia";
import { SetSimple } from "../../structures/SetSimple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_SetSimple = (): void =>
  _test_reflect_metadata("SetSimple")(
    typia.reflect.metadata<[SetSimple]>()
  );