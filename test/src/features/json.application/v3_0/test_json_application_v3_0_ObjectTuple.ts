import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_application_v3_0_ObjectTuple = _test_json_application({
  version: "3.0",
  name: "ObjectTuple",
})(typia.json.application<ObjectTupleApplication, "3.0">());

interface ObjectTupleApplication {
  insert(first: ObjectTuple): Promise<void>;
  reduce(first: ObjectTuple, second: ObjectTuple | null): Promise<ObjectTuple>;
  coalesce(
    first: ObjectTuple | null,
    second: ObjectTuple | null,
    third?: ObjectTuple | null,
  ): Promise<ObjectTuple | null>;
}
