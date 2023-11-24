import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createAssertDecode_ClassNonPublic =
  _test_protobuf_assertDecode("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)(
    {
      decode: (input) => typia.protobuf.assertDecode<ClassNonPublic>(input),
      encode: typia.protobuf.createEncode<ClassNonPublic>(),
    },
  );
