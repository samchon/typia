import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_json_application_v3_0_ObjectUnionExplicitPointer =
  _test_json_application({
    version: "3.0",
    name: "ObjectUnionExplicitPointer",
  })(typia.json.application<ObjectUnionExplicitPointerApplication, "3.0">());

interface ObjectUnionExplicitPointerApplication {
  insert(first: ObjectUnionExplicitPointer): Promise<void>;
  reduce(
    first: ObjectUnionExplicitPointer,
    second: ObjectUnionExplicitPointer | null,
  ): Promise<ObjectUnionExplicitPointer>;
  coalesce(
    first: ObjectUnionExplicitPointer | null,
    second: ObjectUnionExplicitPointer | null,
    third?: ObjectUnionExplicitPointer | null,
  ): Promise<ObjectUnionExplicitPointer | null>;
}
