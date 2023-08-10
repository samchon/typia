import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_misc_isPrune_TagObjectUnion =
    _test_misc_isPrune<TagObjectUnion>(TagObjectUnion)((input) =>
        ((input: any): input is TagObjectUnion => {
            const is = (input: any): input is TagObjectUnion => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    3 <= input.value;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("string" === typeof input.value) return $io1(input);
                        if (
                            "number" === typeof input.value &&
                            Number.isFinite(input.value)
                        )
                            return $io0(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    )
                );
            };
            const prune = (input: TagObjectUnion): void => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.value && 3 <= input.value;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $throws = (typia.misc.isPrune as any).throws;
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $pu0(elem);
                    });
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $pu0 = (input: any): any =>
                    (() => {
                        if ("string" === typeof input.value) return $po1(input);
                        if ("number" === typeof input.value) return $po0(input);
                        $throws({
                            expected:
                                "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                            value: input,
                        });
                    })();
                if (Array.isArray(input)) $pp0(input);
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    );
