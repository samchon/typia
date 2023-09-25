import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_assertEncode_ObjectHttpAtomic =
    _test_protobuf_assertEncode("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectHttpAtomic>(input),
        message: typia.protobuf.message<ObjectHttpAtomic>(),
        decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
    });
