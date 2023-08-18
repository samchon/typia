import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_validateEncode_ObjectPrimitive =
    _test_protobuf_validateEncode<ObjectPrimitive>(ObjectPrimitive)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectPrimitive>(input),
        message: typia.protobuf.message<ObjectPrimitive>(),
    });
