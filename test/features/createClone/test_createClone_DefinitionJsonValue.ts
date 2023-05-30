import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_createClone_DefinitionJsonValue = _test_clone(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    typia.createClone<DefinitionJsonValue>(),
);
