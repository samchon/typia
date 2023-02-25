import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_TagLength = _test_clone("TagLength", TagLength.generate, (input: TagLength): typia.Primitive<TagLength> => {
    const $co0 = (input: any) => ({
        fixed: input.fixed,
        minimum: input.minimum,
        maximum: input.maximum,
        minimum_and_maximum: input.minimum_and_maximum
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
});
