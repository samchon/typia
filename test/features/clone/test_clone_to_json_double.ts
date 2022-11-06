import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_clone } from "./_test_clone";

export const test_clone_to_json_double = _test_clone(
    "twice duplicated toJSON() method type",
    ToJsonDouble.generate,
    (input) => TSON.clone(input),
);
