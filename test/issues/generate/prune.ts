import typia from "../../../src";

interface Dynamic {
    statics: Record<string, Static>;
}
interface Static {
    id: string;
    name: string;
}
(input: Dynamic): void => {
    const $join = (typia.createPrune as any).join;
    const $io1 = (input: any): boolean =>
        Object.keys(input).every((key) => {
            const value = input[key];
            if (undefined === value) return true;
            if (RegExp(/(.*)/).test(key))
                return (
                    "object" === typeof value && null !== value && $io2(value)
                );
            return true;
        });
    const $io2 = (input: any): boolean =>
        "string" === typeof input.id && "string" === typeof input.name;
    const $po0 = (input: any): any => {
        if ("object" === typeof input.statics && null !== input.statics)
            $po1(input.statics);
        for (const key of Object.keys(input)) {
            if ("statics" === key) continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        Object.entries(input).forEach(([key, value]) => {
            if (undefined === value) return;
            if (RegExp(/(.*)/).test(key)) {
                if ("object" === typeof value && null !== value) $po2(value);
            }
        });
        for (const key of Object.keys(input)) {
            if (RegExp(/(.*)/).test(key)) continue;
            delete input[key];
        }
    };
    const $po2 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key) continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
};
