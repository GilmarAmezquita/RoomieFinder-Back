import { Document, FilterQuery, Model } from "mongoose";

export abstract class EntityRepository<T extends Document> {
    constructor(protected readonly entityModel: Model<T>) {}

    async findOne(
        entityFilterQuery : FilterQuery<T>,
        projection? : Record<string, unknown>
    ): Promise<T | null> {
        return this.entityModel.findOne(entityFilterQuery, {
            _id : 0,
            __v : 0,
            ...projection
        }).exec()
    }

    async find(
        entityFilterQuery : FilterQuery<T>,
    ): Promise<T[] | null> {
        return this.entityModel.find(entityFilterQuery).exec();
    }

    async create(createEntityData: unknown): Promise<T> {
        return this.entityModel.create(createEntityData);
    }

    async deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
        const result = await this.entityModel.deleteMany(entityFilterQuery).exec();
        return result.deletedCount > 0;
    }
}