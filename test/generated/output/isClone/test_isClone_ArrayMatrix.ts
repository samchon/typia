import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_isClone_ArrayMatrix = _test_isClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<Array<Array<number>>>> | null => {
            const is: any = (
                input: any,
            ): input is Array<Array<Array<number>>> => {
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
            const clone: any = (
                input: Array<Array<Array<number>>>,
            ): typia.Primitive<Array<Array<Array<number>>>> => {
                return Array.isArray(input)
                    ? (() =>
                          input.map((elem: any) =>
                              Array.isArray(elem)
                                  ? (() =>
                                        elem.map((elem: any) =>
                                            Array.isArray(elem)
                                                ? (() =>
                                                      elem.map(
                                                          (elem: any) =>
                                                              elem as any,
                                                      ))()
                                                : (elem as any),
                                        ))()
                                  : (elem as any),
                          ))()
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    ArrayMatrix.SPOILERS,
);
