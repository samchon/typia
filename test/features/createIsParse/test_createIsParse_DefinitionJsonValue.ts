import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_createIsParse_DefinitionJsonValue = _test_isParse(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    typia.createIsParse<DefinitionJsonValue>(),
    DefinitionJsonValue.SPOILERS,
);
