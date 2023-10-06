import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_createClone_ObjectUnionImplicit = _test_misc_clone(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.misc.createClone<ObjectUnionImplicit>(),
);
