export type ObjectUndefied = ObjectUndefied.ILecture[];
export namespace ObjectUndefied {
    export interface ILecture {
        name: string;
        professor?: string | number;
        grade: number | undefined;
        nothing: undefined;
    }
    export function generate() {
        const output: ObjectUndefied = [];
        const name: string = "someone";
        const nothing: undefined = undefined;

        for (const professor of [undefined, "professor", 1])
            for (const grade of [undefined, 1])
                output.push({ name, professor, grade, nothing });

        return output;
    }
}
