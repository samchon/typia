import { IAccount } from "./IAccount";

export interface IMember {
    id: number;
    account: IAccount;
    emails: string[];
    created_at: string;
}
