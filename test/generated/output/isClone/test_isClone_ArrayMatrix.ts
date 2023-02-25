import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ArrayMatrix = _test_isClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) =>
        ((input: any): typia.Primitive<ArrayMatrix> | null => {
            const is = (input: any): input is ArrayMatrix => {
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
                input: ArrayMatrix,
            ): typia.Primitive<ArrayMatrix> => {
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          Array.isArray(elem)
                              ? elem.map((elem: any) =>
                                    Array.isArray(elem)
                                        ? elem.map((elem: any) => elem as any)
                                        : (elem as any),
                                )
                              : (elem as any),
                      )
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    ArrayMatrix.SPOILERS,
);
