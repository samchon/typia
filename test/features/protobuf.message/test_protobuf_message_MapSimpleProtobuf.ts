import typia from "../../../src";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_MapSimpleProtobuf = _test_protobuf_message(
    "MapSimpleProtobuf",
)(typia.protobuf.message<MapSimpleProtobuf>());