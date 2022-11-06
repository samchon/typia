import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_to_json_tuple = _test_is_clone(
    "toJSON() method returning tuple type",
    ToJsonTuple.generate,
    (input) => TSON.isClone(input),
);
