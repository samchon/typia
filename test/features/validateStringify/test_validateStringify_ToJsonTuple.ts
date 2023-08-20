import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_validateStringify_ToJsonTuple = _test_validateStringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.validateStringify<ToJsonTuple>(input),
);
