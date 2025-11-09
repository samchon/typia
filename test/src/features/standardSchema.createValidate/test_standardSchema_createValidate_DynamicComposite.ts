import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_standardSchema_createValidate_DynamicComposite = (): void =>
  _test_standardSchema_validate("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.createValidate<DynamicComposite>());
