import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_standardSchema_createValidate_NativeUnion = (): void =>
  _test_standardSchema_validate("NativeUnion")<NativeUnion>(NativeUnion)(
    typia.createValidate<NativeUnion>(),
  );
