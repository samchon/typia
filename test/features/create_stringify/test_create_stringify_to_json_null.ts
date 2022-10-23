import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_to_json_null = _test_stringify(
    "toJSON() returning null",
    ToJsonNull.generate(),
    TSON.createStringify<ToJsonNull>(),
);
