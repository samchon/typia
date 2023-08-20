import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_validateStringify_ToJsonDouble = _test_validateStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.validateStringify<ToJsonDouble>(input),
);
