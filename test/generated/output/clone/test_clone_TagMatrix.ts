import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TagMatrix = _test_clone("TagMatrix", TagMatrix.generate, (input) => ((input: TagMatrix): typia.Primitive<TagMatrix> => {
    const $is_uuid = (typia.clone as any).is_uuid;
    const $co0 = (input: any) => ({
        matrix: Array.isArray(input.matrix) ? input.matrix.map((elem: any) => Array.isArray(elem) ? elem.map((elem: any) => elem) : elem) : input.matrix
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
