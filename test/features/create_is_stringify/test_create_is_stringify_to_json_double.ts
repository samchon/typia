import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_to_json_double = _test_is_stringify(
    "twice duplicated toJSON() method type",
    ToJsonDouble.generate,
    TSON.createIsStringify<ToJsonDouble>(),
);
