export interface IModule {
    error: IModule.IFeature;
    functional: IModule.IFeature;
}
export namespace IModule {
    export interface IFeature {
        name: string;
        used: boolean;
    }
}
