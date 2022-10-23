import TSON from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_to_json_undefined = _test_stringify(
    "toJSON() returning undefined",
    ToJsonUndefined.generate(),
    TSON.createStringify<ToJsonUndefined>(),
    (str) => str === undefined,
);
