import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_validateEncode_ObjectJsonTag =
    _test_protobuf_validateEncode<ObjectJsonTag>(ObjectJsonTag)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectJsonTag>(input),
        message: typia.protobuf.message<ObjectJsonTag>(),
    });
