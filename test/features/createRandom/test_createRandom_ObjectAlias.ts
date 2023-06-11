import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createRandom_ObjectAlias = _test_random(
    "ObjectAlias",
    typia.createRandom<ObjectAlias>(),
    typia.createAssert<typia.Primitive<ObjectAlias>>(),
);
