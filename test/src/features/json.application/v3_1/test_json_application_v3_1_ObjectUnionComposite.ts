import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_json_application_v3_1_ObjectUnionComposite =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionComposite",
  })(typia.json.application<ObjectUnionCompositeApplication, "3.1">());

interface ObjectUnionCompositeApplication {
  insert(first: ObjectUnionComposite): Promise<void>;
  reduce(
    first: ObjectUnionComposite,
    second: ObjectUnionComposite | null,
  ): Promise<ObjectUnionComposite>;
  coalesce(
    first: ObjectUnionComposite | null,
    second: ObjectUnionComposite | null,
    third?: ObjectUnionComposite | null,
  ): Promise<ObjectUnionComposite | null>;
}
