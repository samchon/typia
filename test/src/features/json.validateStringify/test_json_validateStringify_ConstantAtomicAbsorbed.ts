import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_json_validateStringify_ConstantAtomicAbsorbed = (): void =>
  _test_json_validateStringify(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
    typia.json.validateStringify<ConstantAtomicAbsorbed>(input),
  );
