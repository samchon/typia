import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_reflect_metadata_NativeSimple = (): void =>
  _test_reflect_metadata("NativeSimple")(
    typia.reflect.metadata<[NativeSimple]>(),
  );
