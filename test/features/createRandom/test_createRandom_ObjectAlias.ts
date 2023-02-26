import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectAlias = _test_random(
    "ObjectAlias",
    typia.createRandom<ObjectAlias>(),
    typia.createAssert<ObjectAlias>(),
);
