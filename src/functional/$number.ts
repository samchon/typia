import { TypeGuardError } from "../TypeGuardError";

export function $number(value: number): number {
    if (isFinite(value) === false)
        throw new TypeGuardError({
            method: "typia.stringify",
            expected: "number",
            value,
            message: "Error on typia.stringify(): infinite or not a number.",
        });
    return value;
}
