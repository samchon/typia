import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectUnionExplicitPointer = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)((input) => typia.json.assertStringify<ObjectUnionExplicitPointer>(input));
