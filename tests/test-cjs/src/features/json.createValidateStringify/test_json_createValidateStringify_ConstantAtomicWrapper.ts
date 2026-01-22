import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_createValidateStringify_ConstantAtomicWrapper =
  (): void =>
    _test_json_validateStringify(
      "ConstantAtomicWrapper",
    )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
      typia.json.createValidateStringify<ConstantAtomicWrapper>(),
    );
