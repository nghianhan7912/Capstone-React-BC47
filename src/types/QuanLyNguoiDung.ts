export type UserLogin = {
    taiKhoan : string ,
    hoTen : string,
    email : string,
    soDT : string,
    maNhom : string,
    maLoaiNguoiDung : "KhachHang" | "QUANTRI"
    accessToken : string
}

export type UserByAccessToken = Omit<UserLogin, 'accessToken'> & {
    thongTinDatVe ?: []
    loaiNguoiDung : {
        maLoaiNguoiDung : "KhachHang" | "QuanTri"
    }
}