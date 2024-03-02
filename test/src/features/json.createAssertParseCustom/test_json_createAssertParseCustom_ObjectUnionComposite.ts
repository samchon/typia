import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_createAssertParseCustom_ObjectUnionComposite =
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.json.createAssertParse<ObjectUnionComposite>(
      (p) => new CustomGuardError(p),
    ),
  );
