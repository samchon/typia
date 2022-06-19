export type ConstantEnumeration = ConstantEnumeration.Enumeration[];
export namespace ConstantEnumeration {
    export enum Enumeration {
        Zero = 0,
        One = 1,
        Two = 2,
        Three = "Three",
        Four = "Four",
    }
    export function generate(): ConstantEnumeration {
        return [
            Enumeration.Zero,
            Enumeration.One,
            Enumeration.Two,
            Enumeration.Three,
            Enumeration.Four,
        ];
    }
}
