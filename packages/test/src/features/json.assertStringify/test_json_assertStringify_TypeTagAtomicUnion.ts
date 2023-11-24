import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_assertStringify_TypeTagAtomicUnion =
  _test_json_assertStringify("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )((input) => typia.json.assertStringify<TypeTagAtomicUnion>(input));
