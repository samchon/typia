import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectUnionImplicit = _test_random(
    "ObjectUnionImplicit",
    typia.createRandom<ObjectUnionImplicit>(),
    typia.createAssert<ObjectUnionImplicit>(),
);
