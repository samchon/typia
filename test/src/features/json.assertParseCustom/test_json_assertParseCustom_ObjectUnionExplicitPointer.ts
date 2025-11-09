import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectUnionExplicitPointer = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)((input) => typia.json.assertParse<ObjectUnionExplicitPointer>(input, (p) => new CustomGuardError(p)));
