import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    subject: Subject;
    name: string;
    email?: string;
    message: string;
    preferredMode: Mode;
    phone: string;
}
export enum Mode {
    offline = "offline",
    online = "online"
}
export enum Subject {
    all = "all",
    maths = "maths",
    english = "english",
    science = "science"
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getDemoBookingCount(): Promise<bigint>;
    submitInquiry(name: string, phone: string, email: string | null, subject: Subject, preferredMode: Mode, message: string): Promise<void>;
}
