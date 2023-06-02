import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_createClone_TagMatrix = _test_clone(
    "TagMatrix",
    TagMatrix.generate,
    (input: TagMatrix): typia.Primitive<TagMatrix> => {
        const $is_uuid: any = (typia.createClone as any).is_uuid;
        const $co0: any = (input: any): any => ({
            matrix: Array.isArray(input.matrix)
                ? (() =>
                      input.matrix.map((elem: any) =>
                          Array.isArray(elem)
                              ? (() => elem.map((elem: any) => elem as any))()
                              : (elem as any),
                      ))()
                : (input.matrix as any),
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
