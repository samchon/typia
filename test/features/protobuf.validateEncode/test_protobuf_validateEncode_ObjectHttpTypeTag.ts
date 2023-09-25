import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_validateEncode_ObjectHttpTypeTag =
    _test_protobuf_validateEncode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectHttpTypeTag>(input),
        message: typia.protobuf.message<ObjectHttpTypeTag>(),
        decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
    });
