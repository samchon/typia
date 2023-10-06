import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_message_MapSimpleProtobufOptional =
    _test_protobuf_message("MapSimpleProtobufOptional")(
        typia.protobuf.message<MapSimpleProtobufOptional>(),
    );
