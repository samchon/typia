import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_json_isStringify_SetUnion = _test_json_isStringify(
    "SetUnion",
    SetUnion.generate,
    typia.json.createIsStringify<SetUnion>(),
    SetUnion.SPOILERS,
);
