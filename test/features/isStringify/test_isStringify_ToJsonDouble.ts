import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_isStringify_ToJsonDouble = _test_isStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.isStringify(input),
);
