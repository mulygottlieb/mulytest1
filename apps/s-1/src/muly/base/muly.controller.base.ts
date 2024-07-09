/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MulyService } from "../muly.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MulyCreateInput } from "./MulyCreateInput";
import { Muly } from "./Muly";
import { MulyFindManyArgs } from "./MulyFindManyArgs";
import { MulyWhereUniqueInput } from "./MulyWhereUniqueInput";
import { MulyUpdateInput } from "./MulyUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MulyControllerBase {
  constructor(
    protected readonly service: MulyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Muly })
  @nestAccessControl.UseRoles({
    resource: "Muly",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMuly(@common.Body() data: MulyCreateInput): Promise<Muly> {
    return await this.service.createMuly({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fld1: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Muly] })
  @ApiNestedQuery(MulyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Muly",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mulies(@common.Req() request: Request): Promise<Muly[]> {
    const args = plainToClass(MulyFindManyArgs, request.query);
    return this.service.mulies({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fld1: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Muly })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Muly",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async muly(
    @common.Param() params: MulyWhereUniqueInput
  ): Promise<Muly | null> {
    const result = await this.service.muly({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fld1: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Muly })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Muly",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMuly(
    @common.Param() params: MulyWhereUniqueInput,
    @common.Body() data: MulyUpdateInput
  ): Promise<Muly | null> {
    try {
      return await this.service.updateMuly({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fld1: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Muly })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Muly",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMuly(
    @common.Param() params: MulyWhereUniqueInput
  ): Promise<Muly | null> {
    try {
      return await this.service.deleteMuly({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fld1: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
