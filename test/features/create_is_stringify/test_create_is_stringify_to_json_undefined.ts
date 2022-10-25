import TSON from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_to_json_undefined = _test_is_stringify(
    "toJSON() returning undefined",
    ToJsonUndefined.generate,
    TSON.createIsStringify<ToJsonUndefined>(),
);
