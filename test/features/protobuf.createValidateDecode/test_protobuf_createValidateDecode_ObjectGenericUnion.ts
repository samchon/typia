import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createValidateDecode_ObjectGenericUnion =
    _test_protobuf_validateDecode("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )({
        validateDecode:
            typia.protobuf.createValidateDecode<ObjectGenericUnion>(),
        encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
    });
