import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_misc_clone_TupleRestAtomic = _test_misc_clone(
    "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
    ((input: TupleRestAtomic): typia.Primitive<TupleRestAtomic> => {
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        return Array.isArray(input) &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Array.isArray(input.slice(2)) &&
            input.slice(2).every((elem: any) => "string" === typeof elem)
            ? ([
                  input[0] as any,
                  input[1] as any,
                  ...(Array.isArray(input.slice(2))
                      ? $cp0(input.slice(2))
                      : (input.slice(2) as any)),
              ] as any)
            : (input as any);
    })(input),
);
