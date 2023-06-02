import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createStringify_TupleRestArray = _test_stringify(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createStringify<TupleRestArray>(),
);
