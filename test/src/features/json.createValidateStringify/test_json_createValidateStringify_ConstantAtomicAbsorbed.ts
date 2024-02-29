import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_json_createValidateStringify_ConstantAtomicAbsorbed =
  _test_json_validateStringify(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
    typia.json.createValidateStringify<ConstantAtomicAbsorbed>(),
  );
