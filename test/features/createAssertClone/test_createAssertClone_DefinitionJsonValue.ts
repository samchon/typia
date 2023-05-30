import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_createAssertClone_DefinitionJsonValue = _test_assertClone(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    typia.createAssertClone<DefinitionJsonValue>(),
    DefinitionJsonValue.SPOILERS,
);
