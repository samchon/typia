import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_misc_clone_TypeTagMatrix = _test_misc_clone(
    "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(
    (input: TypeTagMatrix): typia.Resolved<TypeTagMatrix> => {
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $cp1 = (input: any) =>
            input.map((elem: any) =>
                Array.isArray(elem) ? $cp0(elem) : (elem as any),
            );
        const $co0 = (input: any): any => ({
            matrix: Array.isArray(input.matrix)
                ? $cp1(input.matrix)
                : (input.matrix as any),
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
