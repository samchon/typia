import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_createRandom_DefinitionJsonValue = _test_random(
    "DefinitionJsonValue",
    typia.createRandom<DefinitionJsonValue>(),
    typia.createAssert<typia.Primitive<DefinitionJsonValue>>(),
);
