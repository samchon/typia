import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_isEncode_ObjectGenericUnion =
    _test_protobuf_isEncode("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )({
        isEncode: (input) => typia.protobuf.isEncode<ObjectGenericUnion>(input),
        message: typia.protobuf.message<ObjectGenericUnion>(),
    });
