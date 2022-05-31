export interface ICategory extends ICategory.IBase {
    children: ICategory[];
}
export namespace ICategory {
    export interface IInvert {
        parent: ICategory.IInvert | null;
    }
    export interface IBase {
        id: number;
        code: string;
        name: string;
        sequence: number;
    }
}
