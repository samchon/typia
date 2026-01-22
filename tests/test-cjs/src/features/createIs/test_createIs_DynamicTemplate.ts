import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createIs_DynamicTemplate = (): void =>
  _test_is("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
    typia.createIs<DynamicTemplate>(),
  );
