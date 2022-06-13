import TSON from "../../../src";
import { IObjectToJsonTuple } from "../../structures/IObjectToJsonTuple";
import { _test_stringify } from "./internal/_test_stringify";

export const test_stringify_to_json_to_object = _test_stringify(
    "toJSON() method returning tuple type",
    IObjectToJsonTuple.generate(),
    (input) => TSON.stringify(input),
);
