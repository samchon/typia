import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_isClone_DefinitionJsonValue = _test_isClone(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    (input) => typia.isClone(input),
    DefinitionJsonValue.SPOILERS,
);
