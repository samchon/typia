import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_json_application_swagger_ConstantAtomicWrapper =
    _test_json_application("swagger")("ConstantAtomicWrapper")(
        typia.json.application<[ConstantAtomicWrapper], "swagger">(),
    );
