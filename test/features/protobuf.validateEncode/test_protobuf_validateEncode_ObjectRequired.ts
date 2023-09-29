import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_validateEncode_ObjectRequired =
    _test_protobuf_validateEncode("ObjectRequired")<ObjectRequired>(
        ObjectRequired,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectRequired>(input),
        message: typia.protobuf.message<ObjectRequired>(),
        decode: typia.protobuf.createDecode<ObjectRequired>(),
    });
