import typia from "typia";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectUnionImplicit = _test_validateEquals(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.validateEquals(input),
);
