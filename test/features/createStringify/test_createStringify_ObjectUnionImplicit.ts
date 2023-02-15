import typia from "typia";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectUnionImplicit = _test_stringify(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createStringify<ObjectUnionImplicit>(),
);
