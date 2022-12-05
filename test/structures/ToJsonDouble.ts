export type ToJsonDouble = ToJsonDouble.Parent;
export namespace ToJsonDouble {
    export const PRIMITIVE = false;

    export class Parent {
        public toJSON(): Child {
            return new Child();
        }
    }
    export class Child {
        public readonly id: number = 1;
        public readonly flag: boolean = true;

        public toJSON(): IBrand {
            return {
                code: "code",
                name: "name",
            };
        }
    }
    export interface IBrand {
        code: string;
        name: string;
    }

    export function generate(): ToJsonDouble {
        return new Parent();
    }
}
