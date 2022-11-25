import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ToJsonDouble = _test_isStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => TSON.isStringify(input),
);