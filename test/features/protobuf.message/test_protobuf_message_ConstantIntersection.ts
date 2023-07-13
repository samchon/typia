import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_protobuf_message_ConstantIntersection =
    _test_protobuf_message(
        "ConstantIntersection",
        typia.protobuf.message<ConstantIntersection>(),
    );
