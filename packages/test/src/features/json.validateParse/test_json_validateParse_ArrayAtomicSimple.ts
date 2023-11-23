import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_validateParse_ArrayAtomicSimple =
  _test_json_validateParse("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )((input) => typia.json.validateParse<ArrayAtomicSimple>(input));
