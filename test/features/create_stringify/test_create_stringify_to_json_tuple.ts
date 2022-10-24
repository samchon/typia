import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_to_json_tuple = _test_stringify(
    "toJSON() method returning tuple type",
    ToJsonTuple.generate,
    TSON.createStringify<ToJsonTuple>(),
);
