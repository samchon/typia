import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_isPrune_ObjectUnionDouble = _test_isPrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) =>
        ((input: any): input is Array<ObjectUnionDouble.Union> => {
            const is = (
                input: any,
            ): input is Array<ObjectUnionDouble.Union> => {
                const $io0 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "number" === typeof input.value.x &&
                    Number.isFinite(input.value.x) &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $iu0(input.child);
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "boolean" === typeof input.value.y;
                const $io4 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "number" === typeof input.value.y &&
                    Number.isFinite(input.value.y);
                const $io6 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "string" === typeof input.value.x &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $iu1(input.child);
                const $io8 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "string" === typeof input.value.y;
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
                        if ($io2(input)) return $io2(input);
                        if ($io4(input)) return $io4(input);
                        return false;
                    })();
                const $iu1 = (input: any): any =>
                    (() => {
                        if ($io8(input)) return $io8(input);
                        if ($io10(input)) return $io10(input);
                        return false;
                    })();
                const $iu2 = (input: any): any =>
                    (() => {
                        if ($io0(input)) return $io0(input);
                        if ($io6(input)) return $io6(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu2(elem),
                    )
                );
            };
            const prune = (input: Array<ObjectUnionDouble.Union>): void => {
                const $throws = (typia.isPrune as any).throws;
                const $io0 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io1(input.value) &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $iu0(input.child);
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.x;
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io3(input.value);
                const $io3 = (input: any): boolean =>
                    "boolean" === typeof input.y;
                const $io4 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io5(input.value);
                const $io5 = (input: any): boolean =>
                    "number" === typeof input.y;
                const $io6 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io7(input.value) &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $iu1(input.child);
                const $io7 = (input: any): boolean =>
                    "string" === typeof input.x;
                const $io8 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io9(input.value);
                const $io9 = (input: any): boolean =>
                    "string" === typeof input.y;
                const $io10 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io11(input.value);
                const $io11 = (input: any): boolean =>
                    Array.isArray(input.y) &&
                    input.y.every((elem: any) => "number" === typeof elem);
                const $iu0 = (input: any): any => $io2(input) || $io4(input);
                const $iu1 = (input: any): any => $io8(input) || $io10(input);
                const $iu2 = (input: any): any => $io0(input) || $io6(input);
                const $po0 = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po1(input.value);
                    if ("object" === typeof input.child && null !== input.child)
                        $pu0(input.child);
                    for (const key of Object.keys(input)) {
                        if ("value" === key || "child" === key) continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("x" === key) continue;
                        delete input[key];
                    }
                };
                const $po2 = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po3(input.value);
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po3 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("y" === key) continue;
                        delete input[key];
                    }
                };
                const $po4 = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po5(input.value);
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po5 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("y" === key) continue;
                        delete input[key];
                    }
                };
                const $po6 = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po7(input.value);
                    if ("object" === typeof input.child && null !== input.child)
                        $pu1(input.child);
                    for (const key of Object.keys(input)) {
                        if ("value" === key || "child" === key) continue;
                        delete input[key];
                    }
                };
                const $po7 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("x" === key) continue;
                        delete input[key];
                    }
                };
                const $po8 = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po9(input.value);
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po9 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("y" === key) continue;
                        delete input[key];
                    }
                };
                const $po10 = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po11(input.value);
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po11 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("y" === key) continue;
                        delete input[key];
                    }
                };
                const $pu0 = (input: any): any =>
                    (() => {
                        if ($io2(input)) return $po2(input);
                        if ($io4(input)) return $po4(input);
                        $throws({
                            expected:
                                "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                            value: input,
                        });
                    })();
                const $pu1 = (input: any): any =>
                    (() => {
                        if ($io8(input)) return $po8(input);
                        if ($io10(input)) return $po10(input);
                        $throws({
                            expected:
                                "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                            value: input,
                        });
                    })();
                const $pu2 = (input: any): any =>
                    (() => {
                        if ($io0(input)) return $po0(input);
                        if ($io6(input)) return $po6(input);
                        $throws({
                            expected:
                                "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                            value: input,
                        });
                    })();
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $pu2(elem);
                    });
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ObjectUnionDouble.SPOILERS,
);
