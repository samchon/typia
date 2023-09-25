import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_validateDecode_ObjectHttpAtomic =
    _test_protobuf_validateDecode("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectHttpAtomic>(input),
        encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
    });
