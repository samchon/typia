import typia from "../../../../src";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayAtomicSimple = _test_application(
    "swagger",
)("ArrayAtomicSimple", typia.application<[ArrayAtomicSimple], "swagger">());
