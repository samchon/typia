import typia from "../../../src";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ToJsonDouble = _test_validateStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.validateStringify(input),
);
