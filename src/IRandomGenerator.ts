export interface IRandomGenerator {
    boolean(): boolean;
    integer(minimum?: number, maximum?: number): number;
    number(minimum?: number, maximum?: number): number;
    bigint(minimum?: bigint, maximum?: bigint): bigint;
    string(length?: number): string;
    array<T>(closure: (index: number) => T, count?: number): T[];

    uuid(): string;
    email(): string;
    url(): string;
    ipv4(): string;
    ipv6(): string;
    pattern(regex: RegExp): string;
    date(): string;
}
