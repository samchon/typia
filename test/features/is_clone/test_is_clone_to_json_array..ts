import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_to_json_array = _test_is_clone(
    "toJSON() returning array",
    ToJsonArray.generate,
    (input) => TSON.isClone(input),
);
