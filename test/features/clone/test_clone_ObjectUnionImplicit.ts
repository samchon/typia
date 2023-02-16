import typia from "typia";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectUnionImplicit = _test_clone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.clone(input),
);
