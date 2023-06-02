import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createClone_ObjectUnionImplicit = _test_clone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createClone<ObjectUnionImplicit>(),
);
