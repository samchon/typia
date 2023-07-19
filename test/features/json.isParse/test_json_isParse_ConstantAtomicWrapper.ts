import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_isParse_ConstantAtomicWrapper =
    _test_json_isParse<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
        typia.json.isParse<ConstantAtomicWrapper>(input),
    );
