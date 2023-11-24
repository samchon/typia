import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_validateStringify_ConstantAtomicUnion =
  _test_json_validateStringify("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )((input) => typia.json.validateStringify<ConstantAtomicUnion>(input));
