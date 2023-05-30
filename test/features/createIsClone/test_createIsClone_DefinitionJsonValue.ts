import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_createIsClone_DefinitionJsonValue = _test_isClone(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    typia.createIsClone<DefinitionJsonValue>(),
    DefinitionJsonValue.SPOILERS,
);
