import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createIs_DynamicTree = (): void =>
  _test_is("DynamicTree")<DynamicTree>(DynamicTree)(
    typia.createIs<DynamicTree>(),
  );
