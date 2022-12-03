import { IProtocolProperty } from "./IProtocolProperty";

export interface IProtocolMessage {
    name: string;
    properties: IProtocolProperty[];
}
