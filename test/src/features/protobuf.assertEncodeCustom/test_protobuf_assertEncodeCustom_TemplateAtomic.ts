import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_assertEncodeCustom_TemplateAtomic =
  _test_protobuf_assertEncode(CustomGuardError)(
    "TemplateAtomic",
  )<TemplateAtomic>(TemplateAtomic)({
    encode: (input) =>
      typia.protobuf.assertEncode<TemplateAtomic>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TemplateAtomic>(),
    message: typia.protobuf.message<TemplateAtomic>(),
  });
