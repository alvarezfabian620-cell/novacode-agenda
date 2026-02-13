export interface Event {
    id?: number;
    title: string;
    client_name?: string;
    type?: string;
    start_time: string | Date;
    end_time?: string | Date;
    status: 'active' | 'completed' | 'cancelled';
    created_at?: string;
    updated_at?: string;
}
