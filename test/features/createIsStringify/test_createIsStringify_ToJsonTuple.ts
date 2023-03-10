import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createIsStringify_ToJsonTuple = _test_isStringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createIsStringify<ToJsonTuple>(),
);
