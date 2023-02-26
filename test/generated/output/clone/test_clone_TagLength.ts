import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagLength } from "../../../structures/TagLength";

export const test_clone_TagLength = _test_clone(
    "TagLength",
    TagLength.generate,
    (input) =>
        ((
            input: Array<TagLength.Type>,
        ): typia.Primitive<Array<TagLength.Type>> => {
            const $co0 = (input: any): any => ({
                fixed: input.fixed as any,
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                minimum_and_maximum: input.minimum_and_maximum as any,
            });
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co0(elem)
                          : (elem as any),
                  )
                : (input as any);
        })(input),
);
