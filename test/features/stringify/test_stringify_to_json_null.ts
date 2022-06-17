import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_to_json_null = _test_stringify(
    "toJSON() returning null",
    ToJsonNull.generate(),
    (input) => TSON.stringify(input),
);
