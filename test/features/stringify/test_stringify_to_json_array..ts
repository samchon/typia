import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_to_json_array = _test_stringify(
    "toJSON() returning array",
    ToJsonArray.generate(),
    (input) => TSON.stringify(input),
);
