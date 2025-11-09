import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_validateParse_TypeTagAtomicUnion = (): void =>
  _test_json_validateParse("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )((input) => typia.json.validateParse<TypeTagAtomicUnion>(input));
