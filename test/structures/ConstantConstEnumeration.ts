export type ConstantConstEnumeration = ConstantConstEnumeration.Enumeration[];
export namespace ConstantConstEnumeration {
    export const enum Enumeration {
        Zero = 0,
        One = 1,
        Two = 2,
        Three = "Three",
        Four = "Four",
    }
    export function generate(): ConstantConstEnumeration {
        return [
            Enumeration.Zero,
            Enumeration.One,
            Enumeration.Two,
            Enumeration.Three,
            Enumeration.Four,
        ];
    }
}
