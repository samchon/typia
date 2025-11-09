import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createIs_NativeSimple = (): void =>
  _test_is("NativeSimple")<NativeSimple>(NativeSimple)(
    typia.createIs<NativeSimple>(),
  );
