import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "components";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AccountSchema, AccountSchemaType } from "schema/AccountSchema";

export const AccountInfo = () => {
    const { user } = useAuth();
    const {
        reset,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<AccountSchemaType>({
        resolver: zodResolver(AccountSchema),
        mode: "onBlur"
    });
    const onSubmit : SubmitHandler<AccountSchemaType> = () =>{
        // gọi api update tài khoản


        // dispatch actions getUsserByAccessToken
    } 

    useEffect(() => {
        reset({
            ...user,
            soDt: user?.soDT,
        });
    }, [reset, user]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-20 font-600">Thông tin tài khoản</p>
            <Input
                label="Tài khoản"
                id="taiKhoan"
                register={register}
                error= {errors?.taiKhoan?.message}
                className="[&>input]:bg-transparent [&>input]:border-black [&>input]:border"
            />
            <Input
                label="Họ Tên"
                id="hoTen"
                register={register}
                error= {errors?.hoTen?.message}
                className="[&>input]:bg-transparent [&>input]:border-black [&>input]:border"
            />
            <Input
                label="Email"
                id="email"
                error= {errors?.email?.message}
                register={register}
                className="[&>input]:bg-transparent [&>input]:border-black [&>input]:border"
            />
            <Input
                label="Số điện thoại"
                id="soDt"
                register={register}
                error= {errors?.soDt?.message}
                className="[&>input]:bg-transparent [&>input]:border-black [&>input]:border"
            />
            <Input
                label="Mã Nhóm"
                id="maNhom"
                register={register}
                error= {errors?.maNhom?.message}
                className="[&>input]:bg-transparent [&>input]:border-black [&>input]:border"
            />
            <Input
                label="Mã loại người dùng"
                register={register}
                error= {errors?.maLoaiNguoiDung?.message}
                id="maLoaiNguoiDung"
                className="[&>input]:bg-transparent [&>input]:border-black [&>input]:border"
            />
            <div className="text-right mt-20">
                <Button htmlType="submit" type="primary" className="!h-[46px]">
                    Hoàn thành chỉnh sửa
                </Button>
            </div>
        </form>
    );
};
