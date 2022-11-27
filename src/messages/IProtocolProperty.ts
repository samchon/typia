export interface IProtocolProperty {
    key: string;
    oneOf: IProtocolProperty.IOneOf[];
    required: boolean;
}
export namespace IProtocolProperty {
    export interface IOneOf {
        type: string;
        repeat: boolean;
    }
}
