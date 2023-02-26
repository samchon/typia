import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_random_ObjectGenericAlias = _test_random(
    "ObjectGenericAlias",
    () => typia.random<ObjectGenericAlias>(),
    typia.createAssert<ObjectGenericAlias>(),
);
