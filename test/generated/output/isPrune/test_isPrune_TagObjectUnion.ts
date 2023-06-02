import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_isPrune_TagObjectUnion = _test_isPrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) =>
        ((input: any): input is Array<TagObjectUnion.Type> => {
            const is: any = (
                input: any,
            ): input is Array<TagObjectUnion.Type> => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    3 <= input.value;
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $iu0: any = (input: any): any =>
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
            const prune: any = (input: Array<TagObjectUnion.Type>): void => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.value && 3 <= input.value;
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $throws: any = (typia.isPrune as any).throws;
                const $po0: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po1: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    (() =>
                        input.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $pu0(elem);
                        }))();
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    TagObjectUnion.SPOILERS,
);
