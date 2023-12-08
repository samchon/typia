import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_createIsStringify_TypeTagAtomicUnion =
  _test_json_isStringify("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )(typia.json.createIsStringify<TypeTagAtomicUnion>());
