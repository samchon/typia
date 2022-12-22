import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_message } from "../internal/_test_message";

export const test_message_TupleRestAtomic = _test_message(
    "TupleRestAtomic",
    typia.message<TupleRestAtomic>(),
);