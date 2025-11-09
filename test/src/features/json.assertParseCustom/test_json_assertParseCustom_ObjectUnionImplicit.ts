import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectUnionImplicit = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)((input) => typia.json.assertParse<ObjectUnionImplicit>(input, (p) => new CustomGuardError(p)));
