export type ObjectUndefied = ObjectUndefied.ILecture[];
export namespace ObjectUndefied {
    export interface ILecture {
        name: string;
        professor?: string | number;
        classroom?: IClassroom;
        grade: number | undefined;
        nothing: undefined;
    }
    export interface IClassroom {
        id: string;
        name: string;
    }

    export function generate() {
        const output: ObjectUndefied = [];
        const name: string = "someone";
        const nothing: undefined = undefined;

        for (const professor of [undefined, "professor", 1])
            for (const grade of [undefined, 1])
                for (const classroom of [false, true])
                    output.push({
                        name,
                        professor,
                        grade,
                        classroom: classroom
                            ? {
                                  id: "id",
                                  name: "somewhere",
                              }
                            : undefined,
                        nothing,
                    });

        return output;
    }
}
