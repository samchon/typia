import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_clone_ObjectUnionExplicit = _test_misc_clone(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)((input) => typia.misc.clone<ObjectUnionExplicit>(input));
