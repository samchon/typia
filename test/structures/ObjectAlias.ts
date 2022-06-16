export type ObjectAlias = ObjectAlias.Alias[];
export namespace ObjectAlias {
    export type Alias = IMember;
    export interface IMember {
        id: string | null;
        email: string;
        name: string;
        sex: "male" | "female" | 1 | 2 | null;
        age: number | null;
        dead: boolean | null;
    }

    export function generate(): ObjectAlias {
        const output: ObjectAlias = [];
        for (const id of ["id", null])
            for (const sex of ["male", "female", 1, 2, null] as const)
                for (const age of [1, null])
                    for (const dead of [false, true, null])
                        output.push({
                            id,
                            email: "someone@someone.com",
                            name: "someone",
                            sex,
                            age,
                            dead,
                        });
        return output;
    }
}
