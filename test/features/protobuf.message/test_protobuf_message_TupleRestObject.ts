import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_protobuf_message_TupleRestObject = _test_protobuf_message(
    "TupleRestObject",
    typia.protobuf.message<TupleRestObject>(),
);
