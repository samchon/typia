import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectUnionComposite =
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.json.createAssertParse<ObjectUnionComposite>(
      (p) => new CustomGuardError(p),
    ),
  );
