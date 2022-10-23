import TSON from "../../../src";
import { IObjectToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_to_json_double = _test_stringify(
    "twice duplicated toJSON() method type",
    IObjectToJsonDouble.generate(),
    TSON.createStringify<IObjectToJsonDouble>(),
);
