import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_createValidateParse_ObjectUnionCompositePointer =
  (): void =>
    _test_json_validateParse(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
      typia.json.createValidateParse<ObjectUnionCompositePointer>(),
    );
