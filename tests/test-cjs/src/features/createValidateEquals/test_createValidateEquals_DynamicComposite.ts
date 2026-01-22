import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createValidateEquals_DynamicComposite = (): void =>
  _test_validateEquals("DynamicComposite")<DynamicComposite>(DynamicComposite)(
    typia.createValidateEquals<DynamicComposite>(),
  );
