import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_validateDecode_ObjectUnionCompositePointer =
    _test_protobuf_validateDecode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        validateDecode:
            typia.protobuf.createValidateDecode<ObjectUnionCompositePointer>(),
        encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
    });
