import typia from "typia";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectAlias = _test_stringify(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.stringify(input),
);
