import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TagTuple } from "../../../structures/TagTuple";

export const test_misc_clone_TagTuple = _test_misc_clone("TagTuple")<TagTuple>(
    TagTuple,
)((input) =>
    ((input: TagTuple): typia.Resolved<TagTuple> => {
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $cp1 = (input: any) => input.map((elem: any) => elem as any);
        const $co0 = (input: any): any => ({
            tuple:
                Array.isArray(input.tuple) &&
                input.tuple.length === 4 &&
                "string" === typeof input.tuple[0] &&
                "number" === typeof input.tuple[1] &&
                Array.isArray(input.tuple[2]) &&
                input.tuple[2].every((elem: any) => "string" === typeof elem) &&
                Array.isArray(input.tuple[3]) &&
                input.tuple[3].every((elem: any) => "number" === typeof elem)
                    ? ([
                          input.tuple[0] as any,
                          input.tuple[1] as any,
                          Array.isArray(input.tuple[2])
                              ? $cp0(input.tuple[2])
                              : (input.tuple[2] as any),
                          Array.isArray(input.tuple[3])
                              ? $cp1(input.tuple[3])
                              : (input.tuple[3] as any),
                      ] as any)
                    : (input.tuple as any),
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    })(input),
);
