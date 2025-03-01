export interface LostDog {
    dogName: string;
    status: "Lost" | "Found";
    location: string;
    description: string;
    image?: string;
    userId: string;
    dogId: string;
    createdAt: Date;
    updatedAt: Date;
}