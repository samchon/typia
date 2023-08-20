import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_clone_ObjectUnionImplicit = _test_clone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.clone<ObjectUnionImplicit>(input),
);
