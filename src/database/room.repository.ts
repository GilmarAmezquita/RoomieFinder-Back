/*import { Injectable } from "@nestjs/common";
import { EntityRepository } from "./entity.repository";
import { Room, RoomDocument } from "src/schemas/room.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class RoomRepository extends EntityRepository<RoomDocument> {
    constructor(@InjectModel(Room.name) private rooomModel: Model<RoomDocument>) {
        super(rooomModel)
    }
}*/