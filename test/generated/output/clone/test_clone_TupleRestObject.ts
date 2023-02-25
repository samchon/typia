import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TupleRestObject = _test_clone("TupleRestObject", TupleRestObject.generate, (input) => ((input: TupleRestObject): typia.Primitive<TupleRestObject> => {
    const $io0 = (input: any) => "string" === typeof input.value;
    const $co0 = (input: any) => ({
        value: input.value
    });
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))) ? [
        input[0],
        input[1],
        ...Array.isArray(input.slice(2)) ? input.slice(2).map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input.slice(2)
    ] : input;
})(input));
