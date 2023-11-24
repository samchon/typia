import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_createStringify_ConstantAtomicWrapper =
  _test_json_stringify("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )(typia.json.createStringify<ConstantAtomicWrapper>());
