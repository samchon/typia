import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_createIsClone_TagMatrix = _test_isClone(
    "TagMatrix",
    TagMatrix.generate,
    (input: any): typia.Primitive<TagMatrix> | null => {
        const is: any = (input: any): input is TagMatrix => {
            const $is_uuid: any = (typia.createIsClone as any).is_uuid;
            const $io0: any = (input: any): boolean =>
                Array.isArray(input.matrix) &&
                3 === input.matrix.length &&
                input.matrix.every(
                    (elem: any) =>
                        Array.isArray(elem) &&
                        3 === elem.length &&
                        elem.every(
                            (elem: any) =>
                                "string" === typeof elem && $is_uuid(elem),
                        ),
                );
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone: any = (input: TagMatrix): typia.Primitive<TagMatrix> => {
            const $is_uuid: any = (typia.createIsClone as any).is_uuid;
            const $co0: any = (input: any): any => ({
                matrix: Array.isArray(input.matrix)
                    ? (() =>
                          input.matrix.map((elem: any) =>
                              Array.isArray(elem)
                                  ? (() =>
                                        elem.map((elem: any) => elem as any))()
                                  : (elem as any),
                          ))()
                    : (input.matrix as any),
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    TagMatrix.SPOILERS,
);
