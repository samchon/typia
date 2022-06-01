import { ITimestamp } from "./ITimestamp";

export interface ICategory extends ICategory.IBase {
    children: ICategory[];
}
export namespace ICategory {
    export interface IInvert extends IBase {
        parent: ICategory.IInvert | null;
    }
    export interface IBase {
        id: number;
        code: string;
        name: string;
        sequence: number;
        created_at: ITimestamp;
    }
}
