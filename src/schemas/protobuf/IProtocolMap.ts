export interface IProtocolMap {
    type: "map";
    key: string;
    value: string | IProtocolMap;
}
