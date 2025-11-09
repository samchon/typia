import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_createIsStringify_ObjectUnionExplicitPointer =
  (): void =>
    _test_json_isStringify(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
      typia.json.createIsStringify<ObjectUnionExplicitPointer>(),
    );
