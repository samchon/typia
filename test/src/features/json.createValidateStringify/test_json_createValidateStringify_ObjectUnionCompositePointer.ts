import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_createValidateStringify_ObjectUnionCompositePointer =
  (): void =>
    _test_json_validateStringify(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
      typia.json.createValidateStringify<ObjectUnionCompositePointer>(),
    );
