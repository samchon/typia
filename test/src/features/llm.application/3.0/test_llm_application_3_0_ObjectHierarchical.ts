import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_llm_application_3_0_ObjectHierarchical =
  _test_llm_application({
    model: "3.0",
    name: "ObjectHierarchical",
  })(typia.llm.application<ObjectHierarchicalApplication, "3.0">());

interface ObjectHierarchicalApplication {
  insert(first: ObjectHierarchical): Promise<void>;
  reduce(
    first: ObjectHierarchical,
    second: ObjectHierarchical | null,
  ): Promise<ObjectHierarchical>;
  coalesce(
    first: ObjectHierarchical | null,
    second: ObjectHierarchical | null,
    third?: ObjectHierarchical | null,
  ): Promise<ObjectHierarchical | null>;
}
