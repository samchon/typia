import { ITimestamp } from "./ITimestamp";

export interface IChannel {
    id: number;
    code: string;
    name: string;
    sequence: number;
    exclusive: boolean;
    priority: number;
    created_at: ITimestamp;
}
