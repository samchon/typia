import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createRandom_ObjectUnionExplicit = _test_random(
    "ObjectUnionExplicit",
    typia.createRandom<ObjectUnionExplicit>(),
    typia.createAssert<ObjectUnionExplicit>(),
);
