import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createValidateDecode_ObjectUnionExplicitPointer =
    _test_protobuf_validateDecode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        decode: typia.protobuf.createValidateDecode<ObjectUnionExplicitPointer>(),
        encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
    });
