import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TagTuple = _test_clone("TagTuple", TagTuple.generate, (input) => ((input: TagTuple): typia.Primitive<TagTuple> => {
    const $co0 = (input: any) => ({
        tuple: Array.isArray(input.tuple) && (input.tuple.length === 4 && "string" === typeof input.tuple[0] && "number" === typeof input.tuple[1] && (Array.isArray(input.tuple[2]) && input.tuple[2].every((elem: any) => "string" === typeof elem)) && (Array.isArray(input.tuple[3]) && input.tuple[3].every((elem: any) => "number" === typeof elem))) ? [
            input.tuple[0],
            input.tuple[1],
            Array.isArray(input.tuple[2]) ? input.tuple[2].map((elem: any) => elem) : input.tuple[2],
            Array.isArray(input.tuple[3]) ? input.tuple[3].map((elem: any) => elem) : input.tuple[3]
        ] : input.tuple
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
