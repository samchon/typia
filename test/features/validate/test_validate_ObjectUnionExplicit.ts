import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_validate_ObjectUnionExplicit = _test_validate(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)((input) => typia.validate<ObjectUnionExplicit>(input));
