import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_json_isParse_ObjectUnionDouble = _test_json_isParse(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    ((input: any): typia.Primitive<ObjectUnionDouble> => {
        const is = (input: any): input is ObjectUnionDouble => {
            const $io0 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "number" === typeof (input.value as any).x &&
                Number.isFinite((input.value as any).x) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu1(input.child);
            const $io2 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "boolean" === typeof (input.value as any).y;
            const $io4 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "number" === typeof (input.value as any).y &&
                Number.isFinite((input.value as any).y);
            const $io6 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "string" === typeof (input.value as any).x &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu2(input.child);
            const $io8 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "string" === typeof (input.value as any).y;
            const $io10 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io11(input.value);
            const $io11 = (input: any): boolean =>
                Array.isArray(input.y) &&
                input.y.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                );
            const $iu0 = (input: any): any =>
                (() => {
                    if ($io6(input)) return $io6(input);
                    else if ($io0(input)) return $io0(input);
                    else return false;
                })();
            const $iu1 = (input: any): any =>
                (() => {
                    if ($io4(input)) return $io4(input);
                    else if ($io2(input)) return $io2(input);
                    else return false;
                })();
            const $iu2 = (input: any): any =>
                (() => {
                    if ($io10(input)) return $io10(input);
                    else if ($io8(input)) return $io8(input);
                    else return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    })(input),
);
