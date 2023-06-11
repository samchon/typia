import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createStringify_ToJsonTuple = _test_stringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createStringify<ToJsonTuple>(),
);
