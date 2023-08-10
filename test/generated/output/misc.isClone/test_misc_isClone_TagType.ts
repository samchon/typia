import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TagType } from "../../../structures/TagType";

export const test_misc_isClone_TagType = _test_misc_isClone<TagType>(TagType)(
    (input) =>
        ((
            input: any,
        ): typia.Primitive<IPointer<Array<TagType.Type>>> | null => {
            const is = (input: any): input is IPointer<Array<TagType.Type>> => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.int &&
                    Number.isFinite(input.int) &&
                    parseInt(input.int) === input.int &&
                    "number" === typeof input.uint &&
                    Number.isFinite(input.uint) &&
                    parseInt(input.uint) === input.uint &&
                    0 <= input.uint;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const clone = (
                input: IPointer<Array<TagType.Type>>,
            ): typia.Primitive<IPointer<Array<TagType.Type>>> => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.int &&
                    parseInt(input.int) === input.int &&
                    "number" === typeof input.uint &&
                    parseInt(input.uint) === input.uint &&
                    0 <= input.uint;
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co1(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    value: Array.isArray(input.value)
                        ? $cp0(input.value)
                        : (input.value as any),
                });
                const $co1 = (input: any): any => ({
                    int: input.int as any,
                    uint: input.uint as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
);
