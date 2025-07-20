import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_createAssertDecodeCustom_ClassPropertyAssignment =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)({
      decode: typia.protobuf.createAssertDecode<ClassPropertyAssignment>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
    });
