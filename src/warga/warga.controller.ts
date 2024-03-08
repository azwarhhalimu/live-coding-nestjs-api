import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { warga } from '@prisma/client';
import PrismaService from 'src/service/prisma.service';
import random from 'src/service/random';

@Controller('warga')
class WargaController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async get_warga() {
    const data = await this.prisma.warga.findMany();
    return {
      status: 'data_ok',
      data: data,
    };
  }
  @Get(':id')
  async get_1_warga(@Param() { id }: { id: string }) {
    const data = await this.prisma.warga.findFirst({
      where: {
        id_warga: id,
      },
      include: {
        kelurahan: true,
      },
    });
    return {
      status: 'data_ok',
      data: data,
    };
  }

  @Post()
  async simpan_warga(@Body() formData: warga) {
    await this.prisma.warga.create({
      data: {
        id_warga: random(),
        nama: formData.nama,
        alamat: formData.alamat,
        umur: formData.umur,
        id_kelurahan: formData.id_kelurahan,
      },
    });
    return {
      status: 'sukses',
    };
  }
  @Put(':id')
  async update_warga(@Body() formData: warga, @Param() { id }) {
    await this.prisma.warga.update({
      data: {
        nama: formData.nama,
        alamat: formData.alamat,
        umur: formData.umur,
        id_kelurahan: formData.id_kelurahan,
      },
      where: {
        id_warga: id,
      },
    });
    return {
      status: 'sukses',
    };
  }

  @Delete(':id')
  async delete_warga(@Param() { id }) {
    await this.prisma.warga.delete({
      where: {
        id_warga: id,
      },
    });
    return {
      status: 'sukses',
    };
  }
}

export default WargaController;
