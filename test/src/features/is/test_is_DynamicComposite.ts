import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_is_DynamicComposite = (): void =>
  _test_is("DynamicComposite")<DynamicComposite>(DynamicComposite)((input) =>
    typia.is<DynamicComposite>(input),
  );
