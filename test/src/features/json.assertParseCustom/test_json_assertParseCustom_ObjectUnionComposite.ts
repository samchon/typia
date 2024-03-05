import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_assertParseCustom_ObjectUnionComposite =
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
    typia.json.assertParse<ObjectUnionComposite>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
