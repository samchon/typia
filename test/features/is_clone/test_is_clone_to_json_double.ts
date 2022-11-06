import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_to_json_double = _test_is_clone(
    "twice duplicated toJSON() method type",
    ToJsonDouble.generate,
    (input) => TSON.isClone(input),
);
