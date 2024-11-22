import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_json_application_v3_1_ObjectUnionNonPredictable =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionNonPredictable",
  })(typia.json.application<ObjectUnionNonPredictableApplication, "3.1">());

interface ObjectUnionNonPredictableApplication {
  insert(first: ObjectUnionNonPredictable): Promise<void>;
  reduce(
    first: ObjectUnionNonPredictable,
    second: ObjectUnionNonPredictable | null,
  ): Promise<ObjectUnionNonPredictable>;
  coalesce(
    first: ObjectUnionNonPredictable | null,
    second: ObjectUnionNonPredictable | null,
    third?: ObjectUnionNonPredictable | null,
  ): Promise<ObjectUnionNonPredictable | null>;
}
