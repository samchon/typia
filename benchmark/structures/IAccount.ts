import { ITimestamp } from "./ITimestamp";

export interface IAccount {
    id: number;
    code: string;
    created_at: ITimestamp;
}
