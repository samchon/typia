import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectUnionExplicit = _test_validate(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.validate(input),
    ObjectUnionExplicit.SPOILERS,
);
