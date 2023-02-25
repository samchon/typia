import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectGenericAlias = _test_random(
    "ObjectGenericAlias",
    typia.createRandom<ObjectGenericAlias>(),
    typia.createAssert<ObjectGenericAlias>(),
);
