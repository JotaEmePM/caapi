import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Cat, CatSchema } from "../schemas/cat.schema";
import { CatsService } from "./cats.service";
import { CatsController } from "./cats.controller";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "src/auth/auth.guard";

@Module({
    imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
    controllers: [CatsController],
    providers: [CatsService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard
        }
    ],
})
export class CatsModule { }
