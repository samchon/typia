import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_TagStep = _test_clone("TagStep", TagStep.generate, (input: TagStep): typia.Primitive<TagStep> => {
    const $co0 = (input: any) => ({
        exclusiveMinimum: input.exclusiveMinimum,
        minimum: input.minimum,
        range: input.range,
        multipleOf: input.multipleOf
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
});
