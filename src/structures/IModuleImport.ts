export interface IModuleImport {
    from: "lib" | "src";
    name: string;
    used: boolean;
}
