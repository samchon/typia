import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_validateEncode_ObjectGenericUnion =
    _test_protobuf_validateEncode("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectGenericUnion>(input),
        message: typia.protobuf.message<ObjectGenericUnion>(),
    });
