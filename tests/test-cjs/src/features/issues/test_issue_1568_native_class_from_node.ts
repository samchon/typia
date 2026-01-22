import { Blob, File } from "node:buffer";
import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1568_native_class_from_node = (): void => {
  TestValidator.equals("native")(
    typia.reflect
      .metadata<[Blob | File]>()
      .metadatas[0]?.natives.map((n) => n.name)
      .sort(),
  )(["Blob", "File"]);
};
