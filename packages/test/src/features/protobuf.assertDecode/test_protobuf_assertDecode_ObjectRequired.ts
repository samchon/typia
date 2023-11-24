import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createAssertDecode_ObjectRequired =
  _test_protobuf_assertDecode("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    {
      decode: (input) => typia.protobuf.assertDecode<ObjectRequired>(input),
      encode: typia.protobuf.createEncode<ObjectRequired>(),
    },
  );
