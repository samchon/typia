import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_json_application_v3_1_ObjectUnionCompositePointer =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionCompositePointer",
  })(typia.json.application<ObjectUnionCompositePointerApplication, "3.1">());

interface ObjectUnionCompositePointerApplication {
  insert(first: ObjectUnionCompositePointer): Promise<void>;
  reduce(
    first: ObjectUnionCompositePointer,
    second: ObjectUnionCompositePointer | null,
  ): Promise<ObjectUnionCompositePointer>;
  coalesce(
    first: ObjectUnionCompositePointer | null,
    second: ObjectUnionCompositePointer | null,
    third?: ObjectUnionCompositePointer | null,
  ): Promise<ObjectUnionCompositePointer | null>;
}
