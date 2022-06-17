import TSON from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_to_json_undefined = _test_stringify(
    "toJSON() returning undefined",
    ToJsonUndefined.generate(),
    (input) => TSON.stringify(input),
    (str) => str === undefined,
);
