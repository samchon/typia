import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_is_ToJsonAtomicUnion = _test_is(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) =>
        ((input: any): input is Array<ToJsonAtomicUnion.IToJson> => {
            const $io0: any = (input: any): boolean =>
                "function" === typeof input.toJSON;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        })(input),
);
