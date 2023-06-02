import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagTuple } from "../../../structures/TagTuple";

export const test_clone_TagTuple = _test_clone(
    "TagTuple",
    TagTuple.generate,
    (input) =>
        ((input: TagTuple): typia.Primitive<TagTuple> => {
            const $co0: any = (input: any): any => ({
                tuple:
                    Array.isArray(input.tuple) &&
                    input.tuple.length === 4 &&
                    "string" === typeof input.tuple[0] &&
                    "number" === typeof input.tuple[1] &&
                    Array.isArray(input.tuple[2]) &&
                    input.tuple[2].every(
                        (elem: any) => "string" === typeof elem,
                    ) &&
                    Array.isArray(input.tuple[3]) &&
                    input.tuple[3].every(
                        (elem: any) => "number" === typeof elem,
                    )
                        ? ([
                              input.tuple[0] as any,
                              input.tuple[1] as any,
                              Array.isArray(input.tuple[2])
                                  ? (() =>
                                        input.tuple[2].map(
                                            (elem: any) => elem as any,
                                        ))()
                                  : (input.tuple[2] as any),
                              Array.isArray(input.tuple[3])
                                  ? (() =>
                                        input.tuple[3].map(
                                            (elem: any) => elem as any,
                                        ))()
                                  : (input.tuple[3] as any),
                          ] as any)
                        : (input.tuple as any),
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        })(input),
);
