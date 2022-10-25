import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_to_json_tuple = _test_is_stringify(
    "toJSON() method returning tuple type",
    ToJsonTuple.generate,
    TSON.createIsStringify<ToJsonTuple>(),
);
