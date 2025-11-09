import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_createIsParse_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_json_isParse(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      typia.json.createIsParse<ArrayRecursiveUnionExplicitPointer>(),
    );
