import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createValidate_ObjectUnionExplicit = (): void => _test_validate(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)(typia.createValidate<ObjectUnionExplicit>());
