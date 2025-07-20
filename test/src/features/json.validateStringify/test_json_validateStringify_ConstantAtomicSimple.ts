import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_validateStringify_ConstantAtomicSimple = (): void =>
  _test_json_validateStringify("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )((input) => typia.json.validateStringify<ConstantAtomicSimple>(input));
