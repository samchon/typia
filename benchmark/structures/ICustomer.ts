import { IChannel } from "./IChannel";
import { IMember } from "./IMember";
import { ITimestamp } from "./ITimestamp";

export interface ICustomer {
    id: number;
    channel: IChannel;
    member: IMember | null;
    href: string;
    referrer: string;
    ip: [number, number, number, number];
    created_at: ITimestamp;
}
