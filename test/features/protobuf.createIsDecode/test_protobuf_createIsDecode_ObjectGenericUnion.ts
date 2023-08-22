import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_isDecode_ObjectGenericUnion =
    _test_protobuf_isDecode("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )({
        isDecode: typia.protobuf.createIsDecode<ObjectGenericUnion>(),
        encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
    });
