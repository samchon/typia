import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_createValidateStringify_ConstantAtomicTagged =
  (): void =>
    _test_json_validateStringify("ConstantAtomicTagged")<ConstantAtomicTagged>(
      ConstantAtomicTagged,
    )(typia.json.createValidateStringify<ConstantAtomicTagged>());
