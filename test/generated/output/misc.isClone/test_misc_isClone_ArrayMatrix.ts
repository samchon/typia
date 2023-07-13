import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_misc_isClone_ArrayMatrix = _test_misc_isClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<Array<Array<number>>>> | null => {
            const is = (input: any): input is Array<Array<Array<number>>> => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            elem.every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.every(
                                        (elem: any) =>
                                            "number" === typeof elem &&
                                            Number.isFinite(elem),
                                    ),
                            ),
                    )
                );
            };
            const clone = (
                input: Array<Array<Array<number>>>,
            ): typia.Primitive<Array<Array<Array<number>>>> => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) => elem as any);
                const $cp1 = (input: any) =>
                    input.map((elem: any) =>
                        Array.isArray(elem) ? $cp0(elem) : (elem as any),
                    );
                const $cp2 = (input: any) =>
                    input.map((elem: any) =>
                        Array.isArray(elem) ? $cp1(elem) : (elem as any),
                    );
                return Array.isArray(input) ? $cp2(input) : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    ArrayMatrix.SPOILERS,
);
