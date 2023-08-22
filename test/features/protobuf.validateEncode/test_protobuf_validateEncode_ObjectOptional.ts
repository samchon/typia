import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_validateEncode_ObjectOptional =
    _test_protobuf_validateEncode("ObjectOptional")<ObjectOptional>(
        ObjectOptional,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectOptional>(input),
        message: typia.protobuf.message<ObjectOptional>(),
        decode: typia.protobuf.createDecode<ObjectOptional>(),
    });
