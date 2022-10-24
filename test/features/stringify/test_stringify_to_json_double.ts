import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_to_json_double = _test_stringify(
    "twice duplicated toJSON() method type",
    ToJsonDouble.generate,
    (input) => TSON.stringify(input),
);
