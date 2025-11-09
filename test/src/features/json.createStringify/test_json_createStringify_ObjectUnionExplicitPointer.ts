import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_createStringify_ObjectUnionExplicitPointer = (): void =>
  _test_json_stringify(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
    typia.json.createStringify<ObjectUnionExplicitPointer>(),
  );
