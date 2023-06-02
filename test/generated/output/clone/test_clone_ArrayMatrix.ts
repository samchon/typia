import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_clone_ArrayMatrix = _test_clone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) =>
        ((
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
        })(input),
);
