import { IChannel } from "./IChannel";
import { IMember } from "./IMember";

export interface ICustomer {
    id: number;
    channel: IChannel;
    member: IMember | null;
    href: string;
    referrer: string;
    ip: string;
    created_at: string;
}
