import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_application_swagger_ToJsonAtomicSimple =
  _test_json_application("swagger")("ToJsonAtomicSimple")(
    typia.json.application<[ToJsonAtomicSimple], "swagger">(),
  );
