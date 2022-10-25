import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_to_json_array = _test_is_stringify(
    "toJSON() returning array",
    ToJsonArray.generate,
    (input) => TSON.isStringify(input),
);
