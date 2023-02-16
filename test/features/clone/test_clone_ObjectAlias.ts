import typia from "typia";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectAlias = _test_clone(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.clone(input),
);
