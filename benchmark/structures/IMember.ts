import { IAccount } from "./IAccount";
import { ITimestamp } from "./ITimestamp";

export interface IMember {
    id: number;
    account: IAccount;
    emails: string[];
    created_at: ITimestamp;
    authorized: boolean;
}
