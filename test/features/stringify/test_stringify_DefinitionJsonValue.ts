import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_stringify_DefinitionJsonValue = _test_stringify(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    (input) => typia.stringify(input),
);
