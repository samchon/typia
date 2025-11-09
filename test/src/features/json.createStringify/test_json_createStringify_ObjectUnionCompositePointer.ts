import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_createStringify_ObjectUnionCompositePointer = (): void =>
  _test_json_stringify(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
    typia.json.createStringify<ObjectUnionCompositePointer>(),
  );
