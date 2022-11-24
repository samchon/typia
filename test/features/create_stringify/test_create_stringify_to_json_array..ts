import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_to_json_array = _test_stringify(
    "toJSON() returning array",
    ToJsonArray.generate,
    TSON.createStringify<ToJsonArray>(),
);
