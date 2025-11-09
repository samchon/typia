import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_createIsStringify_ConstantAtomicWrapper = (): void =>
  _test_json_isStringify("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )(typia.json.createIsStringify<ConstantAtomicWrapper>());
