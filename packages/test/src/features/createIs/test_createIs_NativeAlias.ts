import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_createIs_NativeAlias = _test_is("NativeAlias")<NativeAlias>(
  NativeAlias,
)(typia.createIs<NativeAlias>());
