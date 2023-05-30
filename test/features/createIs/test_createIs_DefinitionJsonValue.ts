import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_createIs_DefinitionJsonValue = _test_is(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    typia.createIs<DefinitionJsonValue>(),
    DefinitionJsonValue.SPOILERS,
);
