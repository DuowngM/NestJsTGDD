import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  Param,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Response } from 'express';
import { NewOrder } from './dtos/order.dto';
@Controller('order')
export class OrderController {
  constructor(public orderService: OrderService) {}
  @Get()
  async getAllOrder(@Res() res: Response) {
    return await this.orderService.getAllOrder(res);
  }
  @Get('/:id')
  async getOneOrder(@Param('id') id: number, @Res() res: Response) {
    return await this.orderService.getOneOrder(id, res);
  }
  @Post()
  async createOrder(@Body() newOrder: NewOrder, @Res() res: Response) {
    return await this.orderService.createOrder(newOrder, res);
  }
  @Put('/:id')
  async updateStatusSuccess(@Param('id') id: number, @Res() res: Response) {
    return await this.orderService.updateStatusSuccess(id, res);
  }
  @Patch('/:id')
  async updateStatusCancel(@Param('id') id: number, @Res() res: Response) {
    return await this.orderService.updateStatusCancel(id, res);
  }
  @Delete('/:id')
  async deleteOrder(@Param('id') id: number, @Res() res: Response) {
    return await this.orderService.deleteOrder(id, res);
  }
}
