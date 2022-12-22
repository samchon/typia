import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_message } from "../internal/_test_message";

export const test_message_TupleRestArray = _test_message(
    "TupleRestArray",
    typia.message<TupleRestArray>(),
);