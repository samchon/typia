import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_isStringify_ToJsonArray = _test_isStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) =>
        ((
            input: [
                ToJsonArray.IArray<boolean>,
                ToJsonArray.IArray<number>,
                ToJsonArray.IArray<string>,
                ToJsonArray.IArray<ToJsonArray.IObject>,
            ],
        ): string | null => {
            const is: any = (
                input: any,
            ): input is [
                ToJsonArray.IArray<boolean>,
                ToJsonArray.IArray<number>,
                ToJsonArray.IArray<string>,
                ToJsonArray.IArray<ToJsonArray.IObject>,
            ] => {
                const $io0: any = (input: any): boolean => true;
                const $io1: any = (input: any): boolean => true;
                const $io2: any = (input: any): boolean => true;
                const $io3: any = (input: any): boolean => true;
                return (
                    Array.isArray(input) &&
                    input.length === 4 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0]) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io1(input[1]) &&
                    "object" === typeof input[2] &&
                    null !== input[2] &&
                    $io2(input[2]) &&
                    "object" === typeof input[3] &&
                    null !== input[3] &&
                    $io3(input[3])
                );
            };
            const stringify: any = (
                input: [
                    ToJsonArray.IArray<boolean>,
                    ToJsonArray.IArray<number>,
                    ToJsonArray.IArray<string>,
                    ToJsonArray.IArray<ToJsonArray.IObject>,
                ],
            ): string => {
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                return `[${(() =>
                    `[${input[0]
                        .toJSON()
                        .map((elem: any) => elem)
                        .join(",")}]`)()},${(() =>
                    `[${input[1]
                        .toJSON()
                        .map((elem: any) => $number(elem))
                        .join(",")}]`)()},${(() =>
                    `[${input[2]
                        .toJSON()
                        .map((elem: any) => $string(elem))
                        .join(",")}]`)()},${(() =>
                    `[${input[3]
                        .toJSON()
                        .map((elem: any) => `{"id":${$string(elem.id)}}`)
                        .join(",")}]`)()}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
);
