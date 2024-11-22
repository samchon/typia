import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_json_application_v3_1_TypeTagTuple = _test_json_application({
  version: "3.1",
  name: "TypeTagTuple",
})(typia.json.application<TypeTagTupleApplication, "3.1">());

interface TypeTagTupleApplication {
  insert(first: TypeTagTuple): Promise<void>;
  reduce(
    first: TypeTagTuple,
    second: TypeTagTuple | null,
  ): Promise<TypeTagTuple>;
  coalesce(
    first: TypeTagTuple | null,
    second: TypeTagTuple | null,
    third?: TypeTagTuple | null,
  ): Promise<TypeTagTuple | null>;
}
