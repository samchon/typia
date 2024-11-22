import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_application_v3_0_ClassMethod = _test_json_application({
  version: "3.0",
  name: "ClassMethod",
})(typia.json.application<ClassMethodApplication, "3.0">());

interface ClassMethodApplication {
  insert(first: ClassMethod): Promise<void>;
  reduce(first: ClassMethod, second: ClassMethod | null): Promise<ClassMethod>;
  coalesce(
    first: ClassMethod | null,
    second: ClassMethod | null,
    third?: ClassMethod | null,
  ): Promise<ClassMethod | null>;
}
