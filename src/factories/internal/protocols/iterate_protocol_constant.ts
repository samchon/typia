import { MetadataConstant } from "../../../metadata/MetadataConstant";

export const iterate_protocol_constant =
    (adder: (type: string) => void) => (constants: MetadataConstant[]) => {
        for (const { type, values } of constants) {
            if (type === "boolean") adder("bool");
            else if (type === "number") adder(number(values));
            else if (type === "bigint") adder(bigint(values));
            else adder("string");
        }
    };

const bigint = (values: bigint[]): string => {
    return values.every((v) => v >= BigInt(0)) ? "uint64" : "int64";
};

const number = (values: number[]): string => {
    return values.some((v) => Math.floor(v) !== v)
        ? "double"
        : values.every((v) => v >= 0)
        ? values.every((v) => v <= 2 ** 64 - 1)
            ? "uint32"
            : "uint64"
        : values.every((v) => -(2 ** 31) <= v && v <= 2 ** 31 - 1)
        ? "int32"
        : "int64";
};
