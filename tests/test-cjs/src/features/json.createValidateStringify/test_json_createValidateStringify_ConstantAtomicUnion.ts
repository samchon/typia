import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_createValidateStringify_ConstantAtomicUnion = (): void =>
  _test_json_validateStringify("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )(typia.json.createValidateStringify<ConstantAtomicUnion>());
