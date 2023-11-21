import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createAssertEncode_ClassNonPublic =
  _test_protobuf_assertEncode("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)(
    {
      encode: (input) => typia.protobuf.assertEncode<ClassNonPublic>(input),
      decode: typia.protobuf.createDecode<ClassNonPublic>(),
      message: typia.protobuf.message<ClassNonPublic>(),
    },
  );
