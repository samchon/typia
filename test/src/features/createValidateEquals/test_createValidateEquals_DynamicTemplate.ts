import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createValidateEquals_DynamicTemplate = (): void =>
  _test_validateEquals("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
    typia.createValidateEquals<DynamicTemplate>(),
  );
