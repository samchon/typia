import typia from "typia";
import { SetAlias } from "../../structures/SetAlias";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_SetAlias = (): void =>
  _test_reflect_metadata("SetAlias")(
    typia.reflect.metadata<[SetAlias]>()
  );