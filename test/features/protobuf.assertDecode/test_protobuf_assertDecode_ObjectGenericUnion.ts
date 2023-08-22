import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_assertDecode_ObjectGenericUnion =
    _test_protobuf_assertDecode("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ObjectGenericUnion>(input),
        encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
    });
