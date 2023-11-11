import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_application_swagger_ArrayAtomicSimple =
    _test_json_application("swagger")("ArrayAtomicSimple")(
        typia.json.application<[ArrayAtomicSimple], "swagger">(),
    );
