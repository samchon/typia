import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ToJsonDouble = _test_isStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    TSON.createIsStringify<ToJsonDouble>(),
);