import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_clone } from "./_test_clone";

export const test_clone_to_json_tuple = _test_clone(
    "toJSON() method returning tuple type",
    ToJsonTuple.generate,
    (input) => TSON.clone(input),
);
