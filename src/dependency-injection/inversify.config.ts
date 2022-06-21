import { Container } from 'inversify'
import 'reflect-metadata'

import { TYPES } from "./types";

/* Interfaces */
import {RoleRepository} from "../modules/role/domain/RoleRepository";

/* Classes */
import {RoleCreator} from "../modules/role/application/RoleCreator";
import {RolePostController} from "../modules/role/infraestructure/RolePostController";
import Validator from "../modules/shared/domain/Validator";
import {RoleUpdatedValidator, RoleValidator} from "../modules/role/domain/RoleValidator";
import {MongoRoleRepository} from "../modules/role/infraestructure/MongoRoleRepository";
import {RoleGetController} from "../modules/role/infraestructure/RoleGetController";
import {RoleFinder} from "../modules/role/application/RoleFinder";
import {RolePutController} from "../modules/role/infraestructure/RolePutController";
import {RoleUpdater} from "../modules/role/application/RoleUpdater";

const container = new Container()

// Role
container.bind<RoleRepository>(TYPES.RoleRepository).to(MongoRoleRepository)
container.bind<RoleCreator>(TYPES.RoleCreator).to(RoleCreator)
container.bind<RolePostController>(TYPES.RolePostController).to(RolePostController)
container.bind<Validator>(TYPES.RoleValidator).to(RoleValidator)
container.bind<Validator>(TYPES.RoleUpdatedValidator).to(RoleUpdatedValidator)
container.bind<RoleGetController>(TYPES.RoleGetController).to(RoleGetController)
container.bind<RoleFinder>(TYPES.RoleFinder).to(RoleFinder)
container.bind<RolePutController>(TYPES.RolePutController).to(RolePutController)
container.bind<RoleUpdater>(TYPES.RoleUpdater).to(RoleUpdater)

export { container }
