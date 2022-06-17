import { IJsonApplication, IJsonSchema } from "../../../src";
import { Primitive } from "../../internal/Primitive";

export function _test_application(
    name: string,
    generated: IJsonApplication,
    expected: IJsonApplication,
) {
    return function () {
        sort(generated);
        sort(expected);

        if (Primitive.equal_to(generated, expected) === false)
            throw new Error(
                `Bug on TSON.application(): failed to understand the ${name} type.`,
            );
    };
}

function sort(app: IJsonApplication): void {
    function object(elem: object) {
        for (const value of Object.values(elem)) iterate(value);
    }
    function array(elem: Array<any>) {
        for (const v of elem) iterate(v);
        elem.sort((x, y) => {
            const alpha = JSON.stringify(x);
            const beta = JSON.stringify(y);
            return alpha < beta ? -1 : alpha === beta ? 0 : 1;
        });
    }
    function iterate(elem: any) {
        if (elem === null || elem === undefined) return;
        else if (Array.isArray(elem)) array(elem);
        else if (typeof elem === "object") object(elem);
    }
    iterate(app);
}
