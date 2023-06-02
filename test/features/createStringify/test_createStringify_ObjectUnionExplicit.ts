import typia from "../../../src";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_ObjectUnionExplicit = _test_stringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createStringify<ObjectUnionExplicit>(),
);
