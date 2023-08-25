import { Customizable } from "./typings/Customizable";

export interface IRandomGenerator {
    boolean(): boolean;
    integer(minimum?: number, maximum?: number): number;
    number(minimum?: number, maximum?: number): number;
    bigint(minimum?: bigint, maximum?: bigint): bigint;
    string(length?: number): string;
    array<T>(closure: (index: number) => T, count?: number): T[];
    length(): number;

    uuid(): string;
    email(): string;
    url(): string;
    ipv4(): string;
    ipv6(): string;
    pattern(regex: RegExp): string;
    date(minimum?: number, maximum?: number): string;
    datetime(minimum?: number, maximum?: number): string;

    customs?: IRandomGenerator.CustomMap;
}
export namespace IRandomGenerator {
    export type CustomMap = {
        [Type in keyof Customizable]?: (
            tags: ITypeTag[],
        ) => Customizable[Type] | undefined;
    };

    export interface ITypeTag {
        name: string;
        kind: string;
        value: any;
    }
}
