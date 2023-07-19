import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_protobuf_message_TupleHierarchical = _test_protobuf_message(
    "TupleHierarchical",
)(typia.protobuf.message<TupleHierarchical>());
