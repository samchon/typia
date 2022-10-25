import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_to_json_null = _test_is_stringify(
    "toJSON() returning null",
    ToJsonNull.generate,
    (input) => TSON.isStringify(input),
);
