import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_prune_ObjectUnionDouble = _test_prune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) =>
        ((input: Array<ObjectUnionDouble.Union>): void => {
            const $io0: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io1(input.value) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu1(input.child);
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.x;
            const $io2: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io3(input.value);
            const $io3: any = (input: any): boolean =>
                "boolean" === typeof input.y;
            const $io4: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io5(input.value);
            const $io5: any = (input: any): boolean =>
                "number" === typeof input.y;
            const $io6: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io7(input.value) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu2(input.child);
            const $io7: any = (input: any): boolean =>
                "string" === typeof input.x;
            const $io8: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io9(input.value);
            const $io9: any = (input: any): boolean =>
                "string" === typeof input.y;
            const $io10: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io11(input.value);
            const $io11: any = (input: any): boolean =>
                Array.isArray(input.y) &&
                input.y.every((elem: any) => "number" === typeof elem);
            const $iu1: any = (input: any): any => $io4(input) || $io2(input);
            const $iu2: any = (input: any): any => $io10(input) || $io8(input);
            const $throws: any = (typia.prune as any).throws;
            const $po0: any = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po1(input.value);
                if ("object" === typeof input.child && null !== input.child)
                    $pu1(input.child);
                for (const key: any of Object.keys(input)) {
                    if ("value" === key || "child" === key) continue;
                    delete input[key];
                }
            };
            const $po1: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("x" === key) continue;
                    delete input[key];
                }
            };
            const $po2: any = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po3(input.value);
                for (const key: any of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po3: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("y" === key) continue;
                    delete input[key];
                }
            };
            const $po4: any = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po5(input.value);
                for (const key: any of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po5: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("y" === key) continue;
                    delete input[key];
                }
            };
            const $po6: any = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po7(input.value);
                if ("object" === typeof input.child && null !== input.child)
                    $pu2(input.child);
                for (const key: any of Object.keys(input)) {
                    if ("value" === key || "child" === key) continue;
                    delete input[key];
                }
            };
            const $po7: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("x" === key) continue;
                    delete input[key];
                }
            };
            const $po8: any = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po9(input.value);
                for (const key: any of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po9: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("y" === key) continue;
                    delete input[key];
                }
            };
            const $po10: any = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po11(input.value);
                for (const key: any of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po11: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("y" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                (() =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $pu0(elem);
                    }))();
        })(input),
);
