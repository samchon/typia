import TSON from "../../../src";
import { IObjectToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_to_json_to_double = _test_stringify(
    "twice duplicated toJSON() method type",
    IObjectToJsonDouble.generate(),
    (input) => TSON.stringify(input),
);
