import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Voucher } from './voucher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VoucherService {
  constructor(
    @InjectRepository(Voucher)
    private voucherRepository: Repository<Voucher>,
  ) {}
  async getAllVoucher(res) {
    try {
      const voucher = await this.voucherRepository.find();
      return res.json({
        voucher,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  async getOneVoucher(voucher, res) {
    try {
      const findVoucher = await this.voucherRepository.find({
        where: { voucher_name: voucher },
      });
      return res.status(200).json({
        findVoucher,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  async addNewVoucher(voucher, res) {
    try {
      console.log(voucher);
      const newVoucher = await this.voucherRepository.create({
        voucher_discount: voucher.voucherDiscount,
        voucher_name: voucher.voucherName,
      });
      await this.voucherRepository.save(newVoucher);
      return res.status(201).json({
        message: 'heheheheh',
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
