import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_message_TupleRestArray = _test_message(
    "TupleRestArray",
    typia.message<TupleRestArray>(),
);
