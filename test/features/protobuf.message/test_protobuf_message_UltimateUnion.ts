import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_protobuf_message_UltimateUnion = _test_protobuf_message(
    "UltimateUnion",
)(typia.protobuf.message<UltimateUnion>());
