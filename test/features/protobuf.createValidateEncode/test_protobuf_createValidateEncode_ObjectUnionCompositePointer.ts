import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createValidateEncode_ObjectUnionCompositePointer =
    _test_protobuf_validateEncode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        validateEncode:
            typia.protobuf.createValidateEncode<ObjectUnionCompositePointer>(),
        message: typia.protobuf.message<ObjectUnionCompositePointer>(),
        decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
    });
