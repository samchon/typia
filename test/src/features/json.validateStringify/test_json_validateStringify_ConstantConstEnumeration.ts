import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_validateStringify_ConstantConstEnumeration = (): void =>
  _test_json_validateStringify(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.json.validateStringify<ConstantConstEnumeration>(input),
  );
