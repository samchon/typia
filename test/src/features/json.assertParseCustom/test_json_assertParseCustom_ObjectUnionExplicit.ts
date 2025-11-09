import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectUnionExplicit = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)((input) => typia.json.assertParse<ObjectUnionExplicit>(input, (p) => new CustomGuardError(p)));
