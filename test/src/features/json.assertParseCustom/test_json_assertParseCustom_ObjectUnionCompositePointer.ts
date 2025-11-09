import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_assertParseCustom_ObjectUnionCompositePointer =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
      typia.json.assertParse<ObjectUnionCompositePointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
