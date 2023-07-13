import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_isStringify_ToJsonDouble = _test_json_isStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.json.createIsStringify<ToJsonDouble>(),
);
