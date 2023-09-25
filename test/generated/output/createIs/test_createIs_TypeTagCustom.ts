import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_createIs_TypeTagCustom = _test_is(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input: any): input is TypeTagCustom => {
    return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).id &&
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
            (input as any).id,
        ) &&
        "string" === typeof (input as any).dollar &&
        (input as any).dollar[0] === "$" &&
        !isNaN(
            Number((input as any).dollar.substring(1).split(",").join("")),
        ) &&
        "string" === typeof (input as any).postfix &&
        (input as any).postfix.endsWith("abcd") &&
        "number" === typeof (input as any).powerOf &&
        Number.isFinite((input as any).powerOf) &&
        (() => {
            const denominator: number = Math.log(2);
            const value: number =
                Math.log((input as any).powerOf) / denominator;
            return Math.abs(value - Math.round(value)) < 1e-8;
        })()
    );
});
