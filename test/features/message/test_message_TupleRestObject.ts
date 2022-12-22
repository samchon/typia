import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_message } from "../internal/_test_message";

export const test_message_TupleRestObject = _test_message(
    "TupleRestObject",
    typia.message<TupleRestObject>(),
);