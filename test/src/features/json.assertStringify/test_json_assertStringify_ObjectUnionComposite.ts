import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectUnionComposite = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)((input) => typia.json.assertStringify<ObjectUnionComposite>(input));
