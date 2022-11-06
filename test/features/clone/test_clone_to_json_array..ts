import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_clone } from "./_test_clone";

export const test_clone_to_json_array = _test_clone(
    "toJSON() returning array",
    ToJsonArray.generate,
    (input) => TSON.clone(input),
);
