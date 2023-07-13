import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_protobuf_message_ObjectPropertyNullable =
    _test_protobuf_message(
        "ObjectPropertyNullable",
        typia.protobuf.message<ObjectPropertyNullable>(),
    );
